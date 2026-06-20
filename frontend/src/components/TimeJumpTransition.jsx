import React, { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * TimeJumpTransition — a quick CRT-flicker cut between the vintage eras
 * (Terminal / MySpace / 2016). Deliberately short (~900ms) so dialing
 * through the time machine still feels snappy, unlike the big sparkle makeover.
 */
const TimeJumpTransition = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 900);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden"
      data-testid="time-jump-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, times: [0, 0.15, 0.75, 1] }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 3px)",
        }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 0.9 }}
      />
      <motion.p
        className="text-lime-400 font-mono text-sm tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.9 }}
      >
        loading era...
      </motion.p>
    </motion.div>
  );
};

export default TimeJumpTransition;
