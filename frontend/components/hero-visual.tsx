"use client";

import { motion } from "framer-motion";
import { Search, Lock, FileText, Wifi, Fingerprint, Terminal } from "lucide-react";

// Floating icon node
function FloatingNode({
  icon: Icon,
  x,
  y,
  size = 16,
  delay = 0,
  duration = 4,
  amplitude = 8,
}: {
  icon: React.ElementType;
  x: string;
  y: string;
  size?: number;
  delay?: number;
  duration?: number;
  amplitude?: number;
}) {
  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-md border border-primary/20 bg-card/60 backdrop-blur-sm"
      style={{ left: x, top: y, width: size + 16, height: size + 16 }}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <Icon
        className="text-primary/70"
        style={{ width: size, height: size }}
        strokeWidth={1.5}
      />
    </motion.div>
  );
}

// Pulsing ring node
function PulseNode({
  x,
  y,
  delay = 0,
}: {
  x: string;
  y: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.15, 0.5] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="size-2 rounded-full bg-primary/60" />
      <div className="absolute inset-[-4px] rounded-full border border-primary/30" />
    </motion.div>
  );
}

// SVG connection line between two points
function ConnectionLine({
  x1, y1, x2, y2, delay = 0,
}: {
  x1: number; y1: number; x2: number; y2: number; delay?: number;
}) {
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="oklch(0.78 0.15 195 / 20%)"
      strokeWidth="1"
      strokeDasharray="4 6"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
    />
  );
}

export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative hidden h-[340px] w-full lg:flex items-center justify-center"
    >
      {/* SVG connection lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 360 340"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        {/* Central crosshair rings */}
        <circle cx="180" cy="170" r="70" stroke="oklch(0.78 0.15 195 / 12%)" strokeWidth="1" />
        <circle cx="180" cy="170" r="110" stroke="oklch(0.78 0.15 195 / 7%)" strokeWidth="1" strokeDasharray="6 8" />
        <circle cx="180" cy="170" r="145" stroke="oklch(0.78 0.15 195 / 4%)" strokeWidth="1" />
        {/* Crosshair lines */}
        <line x1="180" y1="30" x2="180" y2="90" stroke="oklch(0.78 0.15 195 / 30%)" strokeWidth="1" />
        <line x1="180" y1="250" x2="180" y2="310" stroke="oklch(0.78 0.15 195 / 30%)" strokeWidth="1" />
        <line x1="40" y1="170" x2="100" y2="170" stroke="oklch(0.78 0.15 195 / 30%)" strokeWidth="1" />
        <line x1="260" y1="170" x2="320" y2="170" stroke="oklch(0.78 0.15 195 / 30%)" strokeWidth="1" />
        {/* Connection lines to nodes */}
        <ConnectionLine x1={180} y1={170} x2={80} y2={80} delay={0.4} />
        <ConnectionLine x1={180} y1={170} x2={290} y2={90} delay={0.7} />
        <ConnectionLine x1={180} y1={170} x2={70} y2={270} delay={1.0} />
        <ConnectionLine x1={180} y1={170} x2={300} y2={260} delay={1.3} />
      </svg>

      {/* Central pulsing core */}
      <motion.div
        className="absolute"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="size-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center shadow-[0_0_20px_oklch(0.78_0.15_195/30%)]">
          <div className="size-3 rounded-full bg-primary/80 shadow-[0_0_8px_oklch(0.78_0.15_195/80%)]" />
        </div>
      </motion.div>

      {/* Floating icon nodes */}
      <FloatingNode icon={Search}     x="13%" y="12%" size={14} delay={0}   duration={4.5} amplitude={7} />
      <FloatingNode icon={Lock}       x="70%" y="8%"  size={14} delay={0.8} duration={5}   amplitude={9} />
      <FloatingNode icon={FileText}   x="8%"  y="62%" size={14} delay={1.2} duration={4.2} amplitude={6} />
      <FloatingNode icon={Wifi}       x="73%" y="66%" size={14} delay={0.4} duration={5.5} amplitude={8} />
      <FloatingNode icon={Fingerprint}x="32%" y="5%"  size={13} delay={1.6} duration={4.8} amplitude={7} />
      <FloatingNode icon={Terminal}   x="56%" y="78%" size={13} delay={0.9} duration={4}   amplitude={6} />

      {/* Pulse nodes (small dots) */}
      <PulseNode x="48%" y="22%" delay={0} />
      <PulseNode x="22%" y="44%" delay={0.6} />
      <PulseNode x="72%" y="40%" delay={1.1} />
      <PulseNode x="38%" y="76%" delay={0.3} />
      <PulseNode x="62%" y="20%" delay={1.4} />

      {/* Corner bracket decorations */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 360 340"
        fill="none"
      >
        {/* Top-left bracket */}
        <path d="M20 50 L20 20 L50 20" stroke="oklch(0.78 0.15 195)" strokeWidth="1.5" />
        {/* Top-right bracket */}
        <path d="M310 20 L340 20 L340 50" stroke="oklch(0.78 0.15 195)" strokeWidth="1.5" />
        {/* Bottom-left bracket */}
        <path d="M20 290 L20 320 L50 320" stroke="oklch(0.78 0.15 195)" strokeWidth="1.5" />
        {/* Bottom-right bracket */}
        <path d="M310 320 L340 320 L340 290" stroke="oklch(0.78 0.15 195)" strokeWidth="1.5" />
      </svg>

      {/* Code fragment labels */}
      <div className="absolute font-mono-data text-[9px] text-primary/40 select-none" style={{ left: "5%", top: "32%" }}>
        0x4D4953
      </div>
      <div className="absolute font-mono-data text-[9px] text-primary/40 select-none" style={{ right: "4%", top: "50%" }}>
        FRAG_03
      </div>
      <div className="absolute font-mono-data text-[9px] text-secondary/40 select-none" style={{ left: "38%", bottom: "8%" }}>
        ████.enc
      </div>
    </div>
  );
}
