import { useCallback, useEffect, useMemo, useState } from "react";

// The time machine, oldest to newest. "future" (index 3) is reachable only
// through the sparkle makeover; leaving it always rewinds straight to
// "myspace" (index 1) — there is no next/prev webring on the future page.
export const ERAS = ["terminal", "myspace", "modern", "future"];

export const ERA = { TERMINAL: 0, MYSPACE: 1, MODERN: 2, FUTURE: 3 };

// Hash-based alt entry points, read once on load, for links shared with
// people who don't need the time-machine intro:
//   "#"  -> straight to the professional (modern) page
//   "#~" -> straight to the terminal with the trail game already running
// Browsers normalize a bare trailing "#" to an empty location.hash, so we
// check location.href for that case.
function readInitialHash() {
  if (typeof window === "undefined") return "";
  if (window.location.hash) return window.location.hash;
  return window.location.href.endsWith("#") ? "#" : "";
}

function initialEraForHash(hash) {
  if (hash === "#~") return ERA.TERMINAL;
  if (hash === "#") return ERA.MODERN;
  return ERA.MYSPACE;
}

const isMyspaceModernPair = (a, b) =>
  (a === ERA.MYSPACE && b === ERA.MODERN) || (a === ERA.MODERN && b === ERA.MYSPACE);

/**
 * Owns which era is on screen and which transition (if any) is playing.
 *
 * stage: "era" | "jump" | "update" | "makeover" | "reverse"
 *   - "jump"     CRT flicker between the vintage eras
 *   - "update"   Windows-update screen for the myspace <-> modern pair
 *   - "makeover" sparkle makeover into the future page
 *   - "reverse"  VHS rewind out of the future page
 */
export function useTimeMachine() {
  const initialHash = useMemo(readInitialHash, []);

  const [eraIndex, setEraIndex] = useState(() => initialEraForHash(initialHash));
  const [stage, setStage] = useState("era");
  const [pendingEra, setPendingEra] = useState(null);
  const [autoTrail, setAutoTrail] = useState(() => initialHash === "#~");

  // Consume the hash right after mount: clear it from the URL bar so a later
  // unrelated reload doesn't silently re-trigger the same entry point, and
  // drop autoTrail so the trail game only auto-starts once per load rather
  // than every time the terminal is revisited this session.
  useEffect(() => {
    if (initialHash === "#" || initialHash === "#~") {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
    setAutoTrail(false);
  }, [initialHash]);

  const goToEra = useCallback(
    (target) => {
      if (stage !== "era" || target === eraIndex) return;
      setPendingEra(target);
      if (target === ERA.FUTURE) {
        setStage("makeover");
      } else if (isMyspaceModernPair(eraIndex, target)) {
        setStage("update");
      } else {
        setStage("jump");
      }
    },
    [stage, eraIndex],
  );

  const startReverse = useCallback(
    (target = ERA.MYSPACE) => {
      if (stage !== "era") return;
      setPendingEra(target);
      setStage("reverse");
    },
    [stage],
  );

  const onEraArrive = useCallback(() => {
    setEraIndex((current) => (pendingEra == null ? current : pendingEra));
    setPendingEra(null);
    setStage("era");
  }, [pendingEra]);

  const onReverseComplete = useCallback(() => {
    setEraIndex(pendingEra ?? ERA.MYSPACE);
    setPendingEra(null);
    setStage("era");
  }, [pendingEra]);

  return {
    era: ERAS[eraIndex],
    stage,
    pendingEra,
    autoTrail,
    goToEra,
    startReverse,
    onEraArrive,
    onReverseComplete,
  };
}
