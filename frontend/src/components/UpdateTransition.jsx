import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const STATUS_LINES = [
  "Removing glitter.exe...",
  "Compiling resume.exe...",
  "Installing professional-mode.dll...",
  "Finalizing...",
];

/**
 * UpdateTransition — a clean, modern "Windows update" style loading screen.
 * Bridges MySpace <-> the professional portfolio: deliberately more
 * "updated"-looking than the terminal-era CRT flicker, signaling a
 * seriousness upgrade without borrowing the sparkly makeover's visual language.
 * ~2s total.
 */
const UpdateTransition = ({ onComplete }) => {
  const dots = useMemo(() => [0, 1, 2], []);

  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(160deg, #0f6cbd 0%, #003a75 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      data-testid="update-transition"
    >
      <div className="flex items-center gap-2 mb-8" aria-hidden="true">
        {dots.map((i) => (
          <motion.span
            key={i}
            className="block w-3 h-3 rounded-full bg-white"
            animate={{ opacity: [0.25, 1, 0.25] }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.p
        className="text-white text-lg md:text-xl font-medium tracking-tight mb-2"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Getting things ready
      </motion.p>

      <div className="h-6 relative w-72 text-center">
        {STATUS_LINES.map((line, i) => {
          const slot = 1 / STATUS_LINES.length;
          const start = i * slot;
          const end = start + slot;
          return (
            <motion.p
              key={line}
              className="absolute inset-0 text-white/70 text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2,
                times: [start, start + slot * 0.15, end - slot * 0.15, end],
              }}
            >
              {line}
            </motion.p>
          );
        })}
      </div>
    </motion.div>
  );
};

export default UpdateTransition;
