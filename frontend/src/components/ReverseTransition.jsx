import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

/**
 * ReverseTransition — aging in reverse: futuristic gloss degrades into a
 * chunky CRT power-off / VHS rewind, then pops back to the retro entrance.
 * Girly-spy joke on top: "UNDOING THE PINK COLLAR ✧ REWINDING TO 2003"
 * ~2.4s total.
 */
const ReverseTransition = ({ onComplete, label = "rewinding to 2003" }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // VHS static noise blocks
  const noiseBlocks = useMemo(
    () =>
      Array.from({ length: 22 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        w: 40 + Math.random() * 160,
        h: 2 + Math.random() * 5,
        delay: Math.random() * 1.8,
        color:
          Math.random() > 0.5
            ? "rgba(255, 105, 180, 0.85)"
            : "rgba(102, 255, 255, 0.75)",
      })),
    []
  );

  return (
    <motion.div
      className="fixed inset-0 z-[200] overflow-hidden"
      data-testid="reverse-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      {/* Base: aged CRT background — pastel washes desaturating into deep magenta */}
      <motion.div
        className="absolute inset-0"
        initial={{
          background:
            "radial-gradient(circle at 50% 50%, #fdf6f9 0%, #f4c2c2 40%, #d94a90 100%)",
        }}
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, #fdf6f9 0%, #f4c2c2 40%, #d94a90 100%)",
            "radial-gradient(circle at 50% 50%, #ff69b4 0%, #7a004a 45%, #0a0018 100%)",
            "radial-gradient(circle at 50% 60%, #ff1493 0%, #1a0033 30%, #000000 100%)",
          ],
        }}
        transition={{ duration: 2.1, times: [0, 0.55, 1] }}
      />

      {/* Scanlines that intensify */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 3px)",
        }}
        initial={{ opacity: 0.15 }}
        animate={{ opacity: [0.15, 0.55, 0.85] }}
        transition={{ duration: 2.1 }}
      />

      {/* VHS tracking bars sweeping vertically */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          height: 22,
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
          mixBlendMode: "overlay",
        }}
        initial={{ top: "-10%" }}
        animate={{ top: ["-10%", "110%", "-10%", "110%"] }}
        transition={{ duration: 2.2, ease: "linear" }}
      />

      {/* Random noise blocks (pink/cyan) */}
      {noiseBlocks.map((b, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: b.top,
            left: b.left,
            width: b.w,
            height: b.h,
            background: b.color,
            mixBlendMode: "screen",
          }}
          initial={{ opacity: 0, scaleX: 0.3 }}
          animate={{ opacity: [0, 1, 0, 1, 0], scaleX: [0.3, 1.4, 0.8, 1.6, 0.4] }}
          transition={{ duration: 2.1, delay: b.delay, times: [0, 0.2, 0.4, 0.7, 1] }}
        />
      ))}

      {/* Chromatic aberration text — three offset copies */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [1.15, 1, 1, 0.95] }}
          transition={{ duration: 2.2, times: [0, 0.15, 0.75, 1] }}
        >
          {/* red channel */}
          <div
            className="absolute inset-0 glam-serif italic text-4xl md:text-6xl"
            style={{
              color: "#ff2fd6",
              transform: "translate(-4px, 2px)",
              textShadow: "0 0 20px rgba(255,47,214,0.6)",
              mixBlendMode: "screen",
            }}
          >
            undoing the pink collar
          </div>
          {/* cyan channel */}
          <div
            className="absolute inset-0 glam-serif italic text-4xl md:text-6xl"
            style={{
              color: "#66ffff",
              transform: "translate(4px, -2px)",
              textShadow: "0 0 20px rgba(102,255,255,0.6)",
              mixBlendMode: "screen",
            }}
          >
            undoing the pink collar
          </div>
          {/* main white */}
          <div
            className="relative glam-serif italic text-4xl md:text-6xl text-white"
            style={{ textShadow: "0 0 25px rgba(255,255,255,0.4)" }}
          >
            undoing the pink collar
          </div>

          <p
            className="mt-6 tracking-[0.5em] uppercase text-xs md:text-sm text-white/90"
            style={{
              fontFamily: "'Source Code Pro', 'Courier New', monospace",
            }}
          >
            ◄◄ {label}
          </p>
        </motion.div>
      </div>

      {/* CRT power-off collapse — top and bottom black bars close on center at the very end */}
      <motion.div
        className="absolute left-0 right-0 top-0 bg-black"
        initial={{ height: 0 }}
        animate={{ height: ["0%", "0%", "50%"] }}
        transition={{ duration: 2.4, times: [0, 0.82, 1], ease: "easeIn" }}
      />
      <motion.div
        className="absolute left-0 right-0 bottom-0 bg-black"
        initial={{ height: 0 }}
        animate={{ height: ["0%", "0%", "50%"] }}
        transition={{ duration: 2.4, times: [0, 0.82, 1], ease: "easeIn" }}
      />

      {/* Final CRT dot at the very center */}
      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full bg-white"
        style={{ transform: "translate(-50%, -50%)" }}
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{
          width: [0, 0, 220, 6],
          height: [0, 0, 4, 4],
          opacity: [0, 0, 1, 1],
        }}
        transition={{ duration: 2.4, times: [0, 0.82, 0.92, 1] }}
      />
    </motion.div>
  );
};

export default ReverseTransition;
