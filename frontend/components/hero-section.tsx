"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroBackground } from "@/components/hero-background";
import { HeroCore } from "@/components/hero-core";
import { BootSequence } from "@/components/boot-sequence";

/* ── Floating code fragment ── */
interface FragmentProps {
  text: string;
  x: string;
  y: string;
  delay?: number;
  duration?: number;
  driftY?: number;
  color?: string;
  size?: string;
  /** Hide on small screens */
  smHidden?: boolean;
  lgHidden?: boolean;
}

function CodeFragment({
  text,
  x,
  y,
  delay = 0,
  duration = 7,
  driftY = -18,
  color = "oklch(0.91 0.28 128 / 55%)",
  size = "10px",
  smHidden = false,
  lgHidden = false,
}: FragmentProps) {
  return (
    <motion.div
      className={`absolute font-mono-data select-none pointer-events-none ${smHidden ? "hidden sm:block" : ""} ${lgHidden ? "hidden lg:block" : ""}`}
      style={{ left: x, top: y, fontSize: size, color, letterSpacing: "0.1em" }}
      animate={{
        y: [0, driftY, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {text}
    </motion.div>
  );
}

export function HeroSection() {
  /* Mouse tracking for HeroCore parallax */
  const sectionRef = useRef<HTMLElement>(null);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const coreMotionX = useRef(0);
  const coreMotionY = useRef(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      // Normalise to [-1, 1] then scale to max ±16px
      mouseXRef.current = ((e.clientX - cx) / rect.width) * 32;
      mouseYRef.current = ((e.clientY - cy) / rect.height) * 20;
      coreMotionX.current = mouseXRef.current;
      coreMotionY.current = mouseYRef.current;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    mouseXRef.current = 0;
    mouseYRef.current = 0;
    coreMotionX.current = 0;
    coreMotionY.current = 0;
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden border-b border-border px-6 py-20 sm:py-28 lg:min-h-[85vh] lg:py-0 lg:flex lg:items-center"
    >
      {/* Animated background layer */}
      <HeroBackground />

      {/* Floating code fragments — placed around the hero */}
      {/* Left side / above content */}
      <CodeFragment text="{ }"          x="1%"   y="8%"   delay={0}   duration={8}  driftY={-14} color="oklch(0.91 0.28 128 / 55%)" size="13px" smHidden />
      <CodeFragment text="< />"         x="2%"   y="55%"  delay={1.4} duration={9}  driftY={-20} color="oklch(0.91 0.28 128 / 50%)" size="12px" smHidden />
      <CodeFragment text="010010"       x="1%"   y="30%"  delay={2.1} duration={11} driftY={-16} color="oklch(0.91 0.28 128 / 40%)" size="10px" smHidden />
      <CodeFragment text="SYS://"       x="3%"   y="78%"  delay={0.8} duration={10} driftY={-12} color="oklch(0.80 0.22 142 / 60%)" size="11px" smHidden />
      <CodeFragment text="404"          x="88%"  y="12%"  delay={1.7} duration={9}  driftY={-18} color="oklch(0.91 0.28 128 / 45%)" size="12px" smHidden lgHidden={false} />
      <CodeFragment text="AUTH_OK"      x="88%"  y="82%"  delay={0.5} duration={8}  driftY={-15} color="oklch(0.80 0.22 142 / 55%)" size="10px" smHidden />
      <CodeFragment text="ACCESS"       x="92%"  y="48%"  delay={2.8} duration={12} driftY={-10} color="oklch(0.91 0.28 128 / 45%)" size="10px" lgHidden={false} smHidden />
      <CodeFragment text="CODE_FRAG"    x="0.5%" y="90%"  delay={3.2} duration={13} driftY={-22} color="oklch(0.91 0.28 128 / 40%)" size="9px"  smHidden />
      <CodeFragment text="0101"         x="90%"  y="65%"  delay={1.1} duration={10} driftY={-14} color="oklch(0.80 0.22 142 / 45%)" size="11px" smHidden />
      <CodeFragment text="ENCRYPT"      x="44%"  y="2%"   delay={2.4} duration={14} driftY={-8}  color="oklch(0.91 0.28 128 / 35%)" size="9px"  smHidden />

      {/* ── Main grid ── */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1fr_480px] lg:gap-16">

        {/* Left column — text content with all existing animations preserved */}
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <Badge
            variant="outline"
            className="font-mono-data text-accent-foreground animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both delay-0"
          >
            4 SEPTEMBER 2026 · 3 MEMBERS PER TEAM
          </Badge>

          <h1 className="glow-cyan text-5xl font-bold tracking-tight text-primary sm:text-7xl animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both delay-150">
            DIGIHUNT
          </h1>

          <h2 className="text-2xl font-semibold tracking-widest text-foreground sm:text-4xl animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both delay-300">
            THE MISSING CODE
          </h2>

          <p className="font-mono-data text-sm text-secondary sm:text-base animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both delay-[450ms]">
            A Story-Driven Technical Challenge
          </p>

          <p className="max-w-xl text-balance text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both delay-[450ms]">
            The system has been compromised. The code is missing. Your team
            has been chosen to find it.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-4 lg:justify-start animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both delay-[600ms]">
            <Button
              size="lg"
              className="glow-border font-mono-data shadow-[0_0_24px_oklch(0.91_0.28_128/30%)] hover:shadow-[0_0_36px_oklch(0.91_0.28_128/60%)]"
              render={<a href="/register" />}
              nativeButton={false}
            >
              REGISTER TEAM
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-mono-data"
              render={<a href="/login" />}
              nativeButton={false}
            >
              LOGIN
            </Button>
          </div>

          <a
            href="#story"
            className="font-mono-data text-xs tracking-wide text-muted-foreground underline-offset-4 hover:text-primary hover:underline animate-in fade-in duration-500 fill-mode-both delay-[600ms]"
          >
            VIEW MISSION ↓
          </a>
        </div>

        {/* Right column — Digital Code Core (desktop: full size, tablet: medium, mobile: compact centered) */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          <div className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none">
            <HeroCoreWrapper />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Separate wrapper so HeroCore's useSpring runs client-side after mount */
function HeroCoreWrapper() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const motionXRef = useRef(0);
  const motionYRef = useRef(0);

  // We pass 0,0 by default — HeroCore handles its own spring internally
  return (
    <div ref={wrapperRef} className="w-full">
      <HeroCore mouseX={0} mouseY={0} />
    </div>
  );
}

// Re-export BootSequence so page.tsx can keep a single import
export { BootSequence };
