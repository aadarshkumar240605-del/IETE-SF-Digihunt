"use client";

import { motion, useSpring } from "framer-motion";
import { Lock } from "lucide-react";

/* Neon lime theme constants */
const CX     = "oklch(0.91 0.28 128)";
const CX_DIM = "oklch(0.91 0.28 128 / 40%)";
const GR     = "oklch(0.80 0.22 142)";

/* One orbiting node — moves on a circular path using CSS rotate trick */
function OrbitNode({
  radius,
  startAngle,
  duration,
  delay = 0,
  color = CX,
  size = 6,
}: {
  radius: number;
  startAngle: number;
  duration: number;
  delay?: number;
  color?: string;
  size?: number;
}) {
  const rad = (startAngle * Math.PI) / 180;
  // Round to 4 dp so server (Node.js) and browser produce identical
  // floating-point strings, preventing a React hydration mismatch.
  const ox = parseFloat((Math.cos(rad) * radius).toFixed(4));
  const oy = parseFloat((Math.sin(rad) * radius).toFixed(4));

  return (
    <motion.div
      className="absolute"
      style={{
        left: `calc(50% + ${ox}px - ${size / 2}px)`,
        top: `calc(50% + ${oy}px - ${size / 2}px)`,
        width: size,
        height: size,
        transformOrigin: `${-ox}px ${-oy}px`,
      }}
      animate={{ rotate: 360 }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    >
      {/* The dot itself — does NOT counter-rotate, so it stays round */}
      <div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          background: color,
          boxShadow: `0 0 ${size + 4}px ${color}`,
        }}
      />
    </motion.div>
  );
}

/* Status label floating around the core */
function StatusLabel({
  text,
  x,
  y,
  color = CX_DIM,
  delay = 0,
}: {
  text: string;
  x: string;
  y: string;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="absolute font-mono-data text-[10px] tracking-widest select-none pointer-events-none"
      style={{ left: x, top: y, color }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2.5, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {text}
    </motion.div>
  );
}

interface HeroCoreProps {
  mouseX?: number;
  mouseY?: number;
}

export function HeroCore({ mouseX = 0, mouseY = 0 }: HeroCoreProps) {
  /* Smooth spring for parallax */
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{
        width: "100%",
        height: "420px",
        x: springX,
        y: springY,
      }}
    >
      {/* ── SVG layer — static rings + crosshair lines ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 420 420"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Outer ring — faint, large */}
        <circle
          cx="210" cy="210" r="180"
          stroke={CX} strokeWidth="0.5" strokeOpacity="0.15"
        />
        {/* Mid ring */}
        <circle
          cx="210" cy="210" r="130"
          stroke={CX} strokeWidth="1" strokeOpacity="0.25"
          strokeDasharray="8 10"
        />
        {/* Inner ring — solid, brighter */}
        <circle
          cx="210" cy="210" r="80"
          stroke={CX} strokeWidth="1.5" strokeOpacity="0.55"
        />
        {/* Crosshair lines */}
        <line x1="210" y1="20"  x2="210" y2="100" stroke={CX} strokeWidth="1" strokeOpacity="0.55" />
        <line x1="210" y1="320" x2="210" y2="400" stroke={CX} strokeWidth="1" strokeOpacity="0.55" />
        <line x1="20"  y1="210" x2="100" y2="210" stroke={CX} strokeWidth="1" strokeOpacity="0.55" />
        <line x1="320" y1="210" x2="400" y2="210" stroke={CX} strokeWidth="1" strokeOpacity="0.55" />
        {/* Diagonal tick marks */}
        <line x1="153" y1="153" x2="165" y2="165" stroke={CX} strokeWidth="1" strokeOpacity="0.35" />
        <line x1="267" y1="153" x2="255" y2="165" stroke={CX} strokeWidth="1" strokeOpacity="0.35" />
        <line x1="153" y1="267" x2="165" y2="255" stroke={CX} strokeWidth="1" strokeOpacity="0.35" />
        <line x1="267" y1="267" x2="255" y2="255" stroke={CX} strokeWidth="1" strokeOpacity="0.35" />
      </svg>

      {/* ── Rotating outer dashed ring ── */}
      <motion.div
        className="absolute rounded-full border-[1.5px] border-dashed"
        style={{
          width: 300,
          height: 300,
          left: "calc(50% - 150px)",
          top: "calc(50% - 150px)",
          borderColor: "oklch(0.91 0.28 128 / 40%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Second slower counter-rotating ring ── */}
      <motion.div
        className="absolute rounded-full border border-dashed"
        style={{
          width: 220,
          height: 220,
          left: "calc(50% - 110px)",
          top: "calc(50% - 110px)",
          borderColor: "oklch(0.80 0.22 142 / 28%)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Pulsing inner glow disc ── */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 160,
          height: 160,
          left: "calc(50% - 80px)",
          top: "calc(50% - 80px)",
          background:
            "radial-gradient(circle, oklch(0.91 0.28 128 / 18%) 0%, oklch(0.91 0.28 128 / 6%) 60%, transparent 100%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Orbiting nodes ── */}
      {/* Fast inner orbit — neon lime */}
      <OrbitNode radius={80}  startAngle={0}   duration={6}  delay={0}   color={CX} size={7} />
      <OrbitNode radius={80}  startAngle={120} duration={6}  delay={0}   color={CX} size={5} />
      <OrbitNode radius={80}  startAngle={240} duration={6}  delay={0}   color={CX} size={5} />
      {/* Slower outer orbit — secondary lime-green */}
      <OrbitNode radius={130} startAngle={60}  duration={14} delay={0}   color={GR} size={6} />
      <OrbitNode radius={130} startAngle={200} duration={14} delay={0}   color={GR} size={4} />
      {/* Very slow outermost — lime faint */}
      <OrbitNode radius={180} startAngle={30}  duration={22} delay={0}   color="oklch(0.91 0.28 128 / 70%)" size={4} />
      <OrbitNode radius={180} startAngle={210} duration={22} delay={0}   color="oklch(0.91 0.28 128 / 50%)" size={3} />

      {/* ── Center icon with glow ── */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          width: 64,
          height: 64,
          left: "calc(50% - 32px)",
          top: "calc(50% - 32px)",
          background: "oklch(0.09 0 0)",
          border: "1.5px solid oklch(0.91 0.28 128 / 65%)",
          boxShadow:
            "0 0 0 4px oklch(0.91 0.28 128 / 10%), 0 0 30px oklch(0.91 0.28 128 / 40%)",
        }}
        animate={{
          boxShadow: [
            "0 0 0 4px oklch(0.91 0.28 128 / 10%), 0 0 20px oklch(0.91 0.28 128 / 30%)",
            "0 0 0 8px oklch(0.91 0.28 128 / 18%), 0 0 40px oklch(0.91 0.28 128 / 65%)",
            "0 0 0 4px oklch(0.91 0.28 128 / 10%), 0 0 20px oklch(0.91 0.28 128 / 30%)",
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Lock
          className="text-primary"
          style={{ width: 26, height: 26 }}
          strokeWidth={1.5}
        />
      </motion.div>

      {/* ── Status labels ── */}
      <StatusLabel text="SYS.ACTIVE"   x="4%"  y="14%" color="oklch(0.91 0.28 128 / 70%)" delay={0}   />
      <StatusLabel text="CODE_404"     x="68%" y="8%"  color="oklch(0.80 0.22 142 / 70%)" delay={0.7} />
      <StatusLabel text="SCANNING..."  x="4%"  y="74%" color="oklch(0.91 0.28 128 / 70%)" delay={1.3} />
      <StatusLabel text="ACCESS_NODE"  x="60%" y="80%" color="oklch(0.80 0.22 142 / 60%)" delay={0.4} />
      <StatusLabel text="FRAG::03"     x="72%" y="44%" color="oklch(0.91 0.28 128 / 50%)" delay={1.8} />
      <StatusLabel text="0x4D495353"   x="2%"  y="44%" color="oklch(0.91 0.28 128 / 45%)" delay={1.0} />
    </motion.div>
  );
}
