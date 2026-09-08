import { useEffect } from "react";

/**
 * Fire `onComplete` once, `ms` milliseconds after mount, and clear the
 * timer on unmount. Used by the full-screen era transitions, which are
 * purely time-boxed animations that hand control back when they finish.
 */
export function useTimedComplete(onComplete, ms) {
  useEffect(() => {
    const timer = setTimeout(onComplete, ms);
    return () => clearTimeout(timer);
  }, [onComplete, ms]);
}
