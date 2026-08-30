"use client";

import { motion } from "framer-motion";
import { Lock, FileSearch, ShieldAlert, Database } from "lucide-react";

function Fragment({
  label,
  x,
  y,
  delay = 0,
  rotate = 0,
}: {
  label: string;
  x: string;
  y: string;
  delay?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      className="absolute font-mono-data text-[10px] text-primary/50 rounded border border-primary/15 bg-card/50 px-2 py-0.5 select-none backdrop-blur-sm"
      style={{ left: x, top: y, rotate }}
      animate={{ y: [0, -6, 0], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 4 + delay, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {label}
    </motion.div>
  );
}

function OrbitIcon({
  icon: Icon,
  angle,
  radius,
  delay = 0,
}: {
  icon: React.ElementType;
  angle: number;
  radius: number;
  delay?: number;
}) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      className="absolute flex items-center justify-center size-9 rounded-lg border border-primary/20 bg-card/70 backdrop-blur-sm"
      style={{
        left: `calc(50% + ${x}px - 18px)`,
        top: `calc(50% + ${y}px - 18px)`,
      }}
      animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3.5, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <Icon className="size-4 text-primary/70" strokeWidth={1.5} />
    </motion.div>
  );
}

export function StoryVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative hidden h-[280px] w-full lg:flex items-center justify-center"
    >
      {/* Orbit rings */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 280" fill="none" preserveAspectRatio="xMidYMid meet">
        <circle cx="150" cy="140" r="80" stroke="oklch(0.78 0.15 195 / 10%)" strokeWidth="1" strokeDasharray="5 7" />
        <circle cx="150" cy="140" r="115" stroke="oklch(0.78 0.15 195 / 6%)" strokeWidth="1" />
      </svg>

      {/* Central lock icon */}
      <motion.div
        className="absolute flex items-center justify-center size-14 rounded-full border border-primary/30 bg-primary/10 shadow-[0_0_24px_oklch(0.78_0.15_195/25%)]"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        animate={{ boxShadow: ["0 0 16px oklch(0.78 0.15 195 / 20%)", "0 0 28px oklch(0.78 0.15 195 / 40%)", "0 0 16px oklch(0.78 0.15 195 / 20%)"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Lock className="size-6 text-primary" strokeWidth={1.5} />
      </motion.div>

      {/* Orbiting icons */}
      <OrbitIcon icon={FileSearch}  angle={-40}  radius={80} delay={0}   />
      <OrbitIcon icon={ShieldAlert} angle={110}  radius={80} delay={0.8} />
      <OrbitIcon icon={Database}    angle={230}  radius={80} delay={1.4} />

      {/* Code fragments */}
      <Fragment label="FRAG_01" x="5%"  y="20%" delay={0}   rotate={-2} />
      <Fragment label="FRAG_02" x="62%" y="10%" delay={0.7} rotate={1}  />
      <Fragment label="FRAG_03" x="5%"  y="68%" delay={1.2} rotate={-1} />
      <Fragment label="?????"   x="68%" y="70%" delay={0.4} rotate={2}  />
    </div>
  );
}
