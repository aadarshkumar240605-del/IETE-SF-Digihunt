"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* ── Large breathing primary glow ── */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 800,
          height: 800,
          background:
            "radial-gradient(circle, oklch(0.91 0.28 128 / 12%) 0%, oklch(0.91 0.28 128 / 4%) 50%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Secondary lime-green glow offset to lower-right ── */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          right: "5%",
          bottom: "5%",
          background:
            "radial-gradient(circle, oklch(0.80 0.22 142 / 8%) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 7, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Top-left lime glow ── */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 350,
          height: 350,
          left: "-5%",
          top: "0%",
          background:
            "radial-gradient(circle, oklch(0.91 0.28 128 / 7%) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, delay: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Vertical scan line moving top → bottom ── */}
      <motion.div
        className="absolute left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.91 0.28 128 / 35%) 20%, oklch(0.91 0.28 128 / 65%) 50%, oklch(0.91 0.28 128 / 35%) 80%, transparent 100%)",
          boxShadow: "0 0 12px 2px oklch(0.91 0.28 128 / 28%)",
        }}
        initial={{ top: "-2px" }}
        animate={{ top: ["0%", "100%"] }}
        transition={{
          duration: 6,
          delay: 1,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1.5,
        }}
      />

      {/* ── Corner bracket marks ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-left */}
        <path
          d="M24 60 L24 24 L60 24"
          stroke="oklch(0.91 0.28 128)"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
        {/* Top-right */}
        <path
          d="M calc(100% - 60px) 24 L calc(100% - 24px) 24 L calc(100% - 24px) 60"
          stroke="oklch(0.91 0.28 128)"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
        {/* Bottom-left */}
        <path
          d="M24 calc(100% - 60px) L24 calc(100% - 24px) L60 calc(100% - 24px)"
          stroke="oklch(0.91 0.28 128)"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
        {/* Bottom-right */}
        <path
          d="M calc(100% - 60px) calc(100% - 24px) L calc(100% - 24px) calc(100% - 24px) L calc(100% - 24px) calc(100% - 60px)"
          stroke="oklch(0.91 0.28 128)"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
      </svg>
    </div>
  );
}
