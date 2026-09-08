import { render, screen } from "@testing-library/react";
import App from "./App";
import { PROFILE } from "./data/portfolio";

afterEach(() => window.history.replaceState(null, "", "/"));

test("defaults to the MySpace entrance", () => {
  window.history.replaceState(null, "", "/");
  render(<App />);
  expect(screen.getByTestId("app-root")).toBeInTheDocument();
  expect(screen.getByTestId("retro-entrance")).toBeInTheDocument();
});

test('the "#" entry point renders the professional page', () => {
  window.history.replaceState(null, "", "/#");
  render(<App />);
  expect(screen.getByTestId("modern-portfolio")).toBeInTheDocument();
  expect(screen.getByText(PROFILE.title)).toBeInTheDocument();
});

test("renders without console errors", () => {
  const spy = jest.spyOn(console, "error").mockImplementation(() => {});
  window.history.replaceState(null, "", "/");
  render(<App />);
  expect(spy).not.toHaveBeenCalled();
  spy.mockRestore();
});
