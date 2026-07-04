import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import "@/App.css";
import TerminalEntrance from "@/components/TerminalEntrance";
import RetroEntrance from "@/components/RetroEntrance";
import ModernPortfolio from "@/components/ModernPortfolio";
import FuturePortfolio from "@/components/FuturePortfolio";
import MakeoverTransition from "@/components/MakeoverTransition";
import ReverseTransition from "@/components/ReverseTransition";
import TimeJumpTransition from "@/components/TimeJumpTransition";
import UpdateTransition from "@/components/UpdateTransition";

// The time machine: oldest to newest. Future (index 3) is reached only via
// the sparkle makeover; leaving Future always rewinds straight to MySpace
// (index 1) — there's no next/prev webring on the Future page itself.
const ERAS = ["terminal", "myspace", "modern", "future"];

function App() {
  // "~" is an alt entry point that skips straight to the professional page,
  // for links shared with people who don't need the time-machine intro.
  const [eraIndex, setEraIndex] = useState(() =>
    typeof window !== "undefined" && window.location.hash === "#~" ? 2 : 1
  );
  // 'era' | 'jump' | 'update' | 'makeover' | 'reverse'
  const [stage, setStage] = useState("era");
  const [pendingEra, setPendingEra] = useState(null);
  const [autoTrail, setAutoTrail] = useState(false);

  const isMyspaceModernPair = (a, b) =>
    (a === 1 && b === 2) || (a === 2 && b === 1);

  const goToEra = (target) => {
    if (stage !== "era" || target === eraIndex) return;
    setPendingEra(target);
    if (target === 3) {
      setStage("makeover");
    } else if (isMyspaceModernPair(eraIndex, target)) {
      setStage("update");
    } else {
      setStage("jump");
    }
  };

  const startReverse = (target = 1) => {
    if (stage !== "era") return;
    setPendingEra(target);
    setStage("reverse");
  };

  const onEraArrive = () => {
    setEraIndex(pendingEra);
    setPendingEra(null);
    setStage("era");
  };

  const goToTrail = () => {
    setAutoTrail(true);
    goToEra(0);
  };

  // Clear the auto-launch flag only after the terminal has had a chance to
  // read it as its initial (mount-time) state, so it doesn't re-trigger on
  // a later, unrelated visit to the terminal era.
  useEffect(() => {
    if (stage === "era" && autoTrail) {
      setAutoTrail(false);
    }
  }, [stage, autoTrail]);

  const onReverseComplete = () => {
    setEraIndex(pendingEra ?? 1);
    setPendingEra(null);
    setStage("era");
  };

  const currentEra = ERAS[eraIndex];

  return (
    <div className="App" data-testid="app-root">
      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          style: {
            fontFamily: "'DM Sans', sans-serif",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(212,175,55,0.35)",
            color: "#1a1a1a",
            borderRadius: "999px",
          },
        }}
      />
      <AnimatePresence mode="wait">
        {stage === "era" && currentEra === "terminal" && (
          <motion.div
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TerminalEntrance
              onNext={() => goToEra(1)}
              onEnterMakeover={() => goToEra(3)}
              autoStartTrail={autoTrail}
            />
          </motion.div>
        )}

        {stage === "era" && currentEra === "myspace" && (
          <motion.div
            key="myspace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <RetroEntrance
              onEnter={() => goToEra(3)}
              onEraPrev={() => goToEra(0)}
              onEraNext={() => goToEra(2)}
              onGoToTrail={goToTrail}
            />
          </motion.div>
        )}

        {stage === "era" && currentEra === "modern" && (
          <motion.div
            key="modern"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ModernPortfolio
              onEraPrev={() => goToEra(1)}
              onEraNext={() => goToEra(3)}
            />
          </motion.div>
        )}

        {stage === "era" && currentEra === "future" && (
          <motion.div
            key="future"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FuturePortfolio
              onExit={() => startReverse(1)}
              onGoToProfessional={() => startReverse(2)}
            />
          </motion.div>
        )}

        {stage === "jump" && (
          <TimeJumpTransition key="jump" onComplete={onEraArrive} />
        )}

        {stage === "update" && (
          <UpdateTransition key="update" onComplete={onEraArrive} />
        )}

        {stage === "makeover" && (
          <MakeoverTransition key="makeover" onComplete={onEraArrive} />
        )}

        {stage === "reverse" && (
          <ReverseTransition
            key="reverse"
            onComplete={onReverseComplete}
            label={pendingEra === 2 ? "rewinding to the resume version" : "rewinding to 2003"}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
