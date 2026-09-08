import { act, renderHook } from "@testing-library/react";
import { useTimeMachine, ERA } from "./useTimeMachine";

function setHref(href) {
  window.history.replaceState(null, "", href);
}

afterEach(() => setHref("/"));

describe("initial era from the URL", () => {
  test("no hash -> myspace entrance", () => {
    setHref("/");
    const { result } = renderHook(() => useTimeMachine());
    expect(result.current.era).toBe("myspace");
  });

  test('"#" -> straight to the modern page', () => {
    setHref("/#");
    const { result } = renderHook(() => useTimeMachine());
    expect(result.current.era).toBe("modern");
  });

  test('"#~" -> terminal with the trail game armed', () => {
    setHref("/#~");
    const { result } = renderHook(() => useTimeMachine());
    expect(result.current.era).toBe("terminal");
  });

  test("the entry-point hash is cleared from the URL after mount", () => {
    setHref("/#~");
    renderHook(() => useTimeMachine());
    expect(window.location.hash).toBe("");
  });
});

describe("transitions between eras", () => {
  test("stepping myspace -> modern plays the update screen", () => {
    setHref("/");
    const { result } = renderHook(() => useTimeMachine());
    act(() => result.current.goToEra(ERA.MODERN));
    expect(result.current.stage).toBe("update");
    act(() => result.current.onEraArrive());
    expect(result.current.stage).toBe("era");
    expect(result.current.era).toBe("modern");
  });

  test("going to the future page plays the makeover", () => {
    setHref("/");
    const { result } = renderHook(() => useTimeMachine());
    act(() => result.current.goToEra(ERA.FUTURE));
    expect(result.current.stage).toBe("makeover");
  });

  test("stepping across non-adjacent vintage eras plays the jump", () => {
    setHref("/#~"); // start on terminal
    const { result } = renderHook(() => useTimeMachine());
    act(() => result.current.goToEra(ERA.MODERN));
    expect(result.current.stage).toBe("jump");
  });

  test("a no-op goToEra (same era) does nothing", () => {
    setHref("/");
    const { result } = renderHook(() => useTimeMachine());
    act(() => result.current.goToEra(ERA.MYSPACE));
    expect(result.current.stage).toBe("era");
  });

  test("startReverse rewinds to the requested era", () => {
    setHref("/");
    const { result } = renderHook(() => useTimeMachine());
    act(() => result.current.goToEra(ERA.FUTURE));
    act(() => result.current.onEraArrive());
    expect(result.current.era).toBe("future");

    act(() => result.current.startReverse(ERA.MODERN));
    expect(result.current.stage).toBe("reverse");
    act(() => result.current.onReverseComplete());
    expect(result.current.era).toBe("modern");
  });
});
