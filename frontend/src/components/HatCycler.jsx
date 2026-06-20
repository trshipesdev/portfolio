import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HATS } from "../data/portfolio";

/**
 * HatCycler — animated cute-goofy hat that jiggles and cycles.
 * Click to advance manually. Also auto-cycles every 3.5s.
 * A sparkle burst plays every time it changes.
 */
const HatCycler = ({ size = 96 }) => {
  const [idx, setIdx] = useState(0);
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % HATS.length);
      setBurst((b) => b + 1);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  const next = () => {
    setIdx((i) => (i + 1) % HATS.length);
    setBurst((b) => b + 1);
  };

  const current = HATS[idx];

  return (
    <button
      type="button"
      onClick={next}
      aria-label={`Change hat (currently ${current.label}). Click for another.`}
      data-testid="hat-cycler"
      className="relative inline-flex items-center justify-center align-middle select-none group"
      style={{ width: size, height: size }}
    >
      {/* jiggle wrapper */}
      <motion.div
        className="relative"
        animate={{ rotate: [-3, 3, -3], y: [0, -1, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ fontSize: size * 0.75, lineHeight: 1 }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={idx}
            initial={{ scale: 0.4, rotate: -30, opacity: 0, y: 10 }}
            animate={{ scale: 1, rotate: 0, opacity: 1, y: 0 }}
            exit={{ scale: 0.4, rotate: 30, opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="inline-block"
          >
            {current.icon}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Sparkle burst */}
      <AnimatePresence>
        <motion.div
          key={burst}
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const dist = size * 0.55;
            return (
              <motion.span
                key={i}
                className="absolute glam-gold"
                style={{
                  left: "50%",
                  top: "50%",
                  fontSize: 14,
                  textShadow: "0 0 8px #fff",
                }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 0.4 }}
                animate={{
                  x: Math.cos(angle) * dist,
                  y: Math.sin(angle) * dist,
                  opacity: 0,
                  scale: 1.2,
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                ✦
              </motion.span>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Tiny click affordance */}
      <span className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-widest text-neutral-500 opacity-0 group-hover:opacity-100 transition">
        click me
      </span>
    </button>
  );
};

export default HatCycler;
