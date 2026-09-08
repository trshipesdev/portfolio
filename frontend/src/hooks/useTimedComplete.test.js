import { renderHook } from "@testing-library/react";
import { useTimedComplete } from "./useTimedComplete";

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

test("fires onComplete once after the given delay", () => {
  const onComplete = jest.fn();
  renderHook(() => useTimedComplete(onComplete, 900));

  expect(onComplete).not.toHaveBeenCalled();
  jest.advanceTimersByTime(899);
  expect(onComplete).not.toHaveBeenCalled();
  jest.advanceTimersByTime(1);
  expect(onComplete).toHaveBeenCalledTimes(1);
});

test("clears its timeout on unmount", () => {
  const onComplete = jest.fn();
  const { unmount } = renderHook(() => useTimedComplete(onComplete, 500));

  unmount();
  jest.advanceTimersByTime(1000);
  expect(onComplete).not.toHaveBeenCalled();
});
