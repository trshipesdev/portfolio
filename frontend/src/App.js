import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import "@/App.css";
import { useTimeMachine } from "@/hooks/useTimeMachine";
import TerminalEntrance from "@/components/eras/TerminalEntrance";
import RetroEntrance from "@/components/eras/RetroEntrance";
import ModernPortfolio from "@/components/eras/ModernPortfolio";
import FuturePortfolio from "@/components/eras/FuturePortfolio";
import MakeoverTransition from "@/components/transitions/MakeoverTransition";
import ReverseTransition from "@/components/transitions/ReverseTransition";
import TimeJumpTransition from "@/components/transitions/TimeJumpTransition";
import UpdateTransition from "@/components/transitions/UpdateTransition";

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

const toasterOptions = {
  style: {
    fontFamily: "'DM Sans', sans-serif",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(212,175,55,0.35)",
    color: "#1a1a1a",
    borderRadius: "999px",
  },
};

function App() {
  const {
    era,
    stage,
    pendingEra,
    autoTrail,
    goToEra,
    startReverse,
    onEraArrive,
    onReverseComplete,
  } = useTimeMachine();

  return (
    <div className="App" data-testid="app-root">
      <Toaster position="top-center" richColors toastOptions={toasterOptions} />

      <AnimatePresence mode="wait">
        {stage === "era" && era === "terminal" && (
          <motion.div key="terminal" {...fade}>
            <TerminalEntrance
              onNext={() => goToEra(1)}
              onEnterMakeover={() => goToEra(3)}
              onEnterProfessional={() => goToEra(2)}
              autoStartTrail={autoTrail}
            />
          </motion.div>
        )}

        {stage === "era" && era === "myspace" && (
          <motion.div key="myspace" {...fade}>
            <RetroEntrance
              onEnter={() => goToEra(3)}
              onEraPrev={() => goToEra(0)}
              onEraNext={() => goToEra(2)}
            />
          </motion.div>
        )}

        {stage === "era" && era === "modern" && (
          <motion.div key="modern" {...fade}>
            <ModernPortfolio
              onEraPrev={() => goToEra(1)}
              onEraNext={() => goToEra(3)}
            />
          </motion.div>
        )}

        {stage === "era" && era === "future" && (
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
            label={
              pendingEra === 2
                ? "rewinding to the portfolio version"
                : "rewinding to 2007"
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
