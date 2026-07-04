import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

// Future page's rainbow blended with MySpace's lime/yellow.
const SPARKLE_PALETTE = ["#ffffff", "#ffd166", "#ff2fd6", "#66ffff", "#c299fc", "#a3e635"];

/**
 * MakeoverTransition — girly-spy makeover with binary rain behind
 * a glossy "bend & snap." reveal. ~2.2s total.
 */
const BinaryRain = () => {
  const rows = useMemo(() => {
    const h = typeof window !== "undefined" ? window.innerHeight : 900;
    const count = Math.ceil(h / 92); // sparser — one row every ~92px
    // Future page's rainbow (pink/gold/cyan/purple) blended with MySpace's
    // signature lime + yellow, so the transition bridges both eras' palettes.
    const palette = [
      "#ff2fd6",
      "#ffd166",
      "#66ffff",
      "#c299fc",
      "#a3e635",
      "#fde047",
    ];
    return Array.from({ length: count }).map((_, i) => ({
      y: i * 92 + 24,
      delay: Math.random() * 1.4,
      duration: 7 + Math.random() * 2.5,
      direction: i % 2 === 0 ? 1 : -1,
      chars: Array.from({ length: 28 + Math.floor(Math.random() * 14) })
        .map(() => (Math.random() > 0.5 ? "1" : "0"))
        .join(" "),
      hue: palette[i % palette.length],
    }));
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {rows.map((r, i) => (
        <motion.div
          key={i}
          className="absolute left-0 select-none whitespace-nowrap"
          style={{
            top: r.y,
            fontFamily: "'Source Code Pro', 'Courier New', monospace",
            fontSize: 26,
            fontWeight: 700,
            lineHeight: "1.05",
            color: r.hue,
            textShadow: `0 0 6px ${r.hue}, 0 0 14px ${r.hue}, 0 0 22px rgba(255,255,255,0.6)`,
            letterSpacing: "0.18em",
            opacity: 0.95,
          }}
          initial={{ x: r.direction > 0 ? "-60%" : "60%", opacity: 0 }}
          animate={{
            x: r.direction > 0 ? "115%" : "-115%",
            opacity: [0, 1, 1, 0.2],
          }}
          transition={{
            duration: r.duration,
            delay: r.delay,
            ease: "linear",
            times: [0, 0.12, 0.8, 1],
          }}
        >
          {r.chars}
        </motion.div>
      ))}
    </div>
  );
};

const MakeoverTransition = ({ onComplete }) => {
  const sparkles = useMemo(
    () =>
      Array.from({ length: 60 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 12 + Math.random() * 28,
        delay: Math.random() * 0.6,
      })),
    []
  );

  useEffect(() => {
    const timer = setTimeout(onComplete, 2400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      data-testid="makeover-transition"
    >
      {/* Flash background — Future page's rainbow blended toward MySpace's
          lime/yellow at the outer edge, deep for binary contrast */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, #ffffff 0%, #ffd166 18%, #ff2fd6 38%, #c299fc 58%, #a3e635 78%, #0a0018 100%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.6, 3], opacity: [0, 1, 0.55] }}
        transition={{ duration: 2 }}
      />

      {/* Dark tint (subtle) so binary reads without overpowering */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(10, 0, 24, 0.18)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.35, 0.15] }}
        transition={{ duration: 2 }}
      />

      {/* Cyberpunk binary rain */}
      <BinaryRain />

      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <motion.span
          key={i}
          className="absolute select-none"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: s.size,
            color: SPARKLE_PALETTE[i % SPARKLE_PALETTE.length],
            textShadow: "0 0 12px rgba(255,255,255,0.9)",
          }}
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.4, 0],
            rotate: [0, 360],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 1.6, delay: s.delay, ease: "easeOut" }}
        >
          ✦
        </motion.span>
      ))}

      {/* Center text */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: [0.6, 1.2, 1], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, times: [0, 0.3, 0.7, 1] }}
      >
        <p
          className="glam-serif italic text-5xl md:text-7xl text-white"
          style={{ textShadow: "0 4px 30px rgba(122,0,74,0.4)" }}
        >
          bend &amp; snap.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default MakeoverTransition;
