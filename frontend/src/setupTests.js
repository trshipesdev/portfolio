import "@testing-library/jest-dom";

// jsdom is missing a few browser APIs the era pages touch on mount.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  });
}

if (!window.IntersectionObserver) {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
}

window.scrollTo = window.scrollTo || (() => {});

// Framer Motion runs real timers and animation frames that make timed
// transitions flaky under jsdom. Swap it for plain elements / passthroughs;
// the tests care about behaviour (callbacks firing, content rendering), not
// the animation itself.
jest.mock("framer-motion", () => {
  const React = require("react");
  const passthrough = (tag) =>
    React.forwardRef(({ children, ...props }, ref) => {
      const domProps = Object.fromEntries(
        Object.entries(props).filter(
          ([key]) =>
            !/^(initial|animate|exit|transition|variants|whileHover|whileTap|whileInView|whileFocus|whileDrag|layout|layoutId|drag|dragConstraints|viewport|custom)$/.test(
              key,
            ),
        ),
      );
      return React.createElement(tag, { ...domProps, ref }, children);
    });

  return {
    __esModule: true,
    AnimatePresence: ({ children }) => React.createElement(React.Fragment, null, children),
    motion: new Proxy(
      {},
      { get: (_target, tag) => passthrough(typeof tag === "string" ? tag : "div") },
    ),
    useReducedMotion: () => true,
    useAnimation: () => ({ start: jest.fn(), stop: jest.fn(), set: jest.fn() }),
  };
});
