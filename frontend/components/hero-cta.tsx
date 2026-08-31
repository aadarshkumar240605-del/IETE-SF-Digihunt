"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

/* ─────────────────────────────────────────────
   Ambient floating digital fragment
───────────────────────────────────────────── */
function CtaFragment({
  text,
  x,
  y,
  delay = 0,
  duration = 9,
  driftY = -12,
  color = "oklch(0.91 0.28 128 / 28%)",
  size = "9px",
}: {
  text: string;
  x: string;
  y: string;
  delay?: number;
  duration?: number;
  driftY?: number;
  color?: string;
  size?: string;
}) {
  return (
    <motion.div
      className="absolute font-mono-data select-none pointer-events-none"
      style={{ left: x, top: y, fontSize: size, color, letterSpacing: "0.12em" }}
      animate={{ y: [0, driftY, 0], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {text}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Entrance stagger variants
───────────────────────────────────────────── */
const enterContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
};

const enterItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const enterItemScale = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export function HeroCTA() {
  const [registerHovered, setRegisterHovered] = useState(false);

  return (
    <section className="relative overflow-hidden px-6 py-28 text-center">

      {/* ── Background glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          className="size-[500px] rounded-full bg-primary/[0.04]"
          style={{ filter: "blur(100px)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Ambient floating digital fragments ── */}
      <CtaFragment
        text="<>"
        x="3%"  y="10%"
        delay={0}   duration={9}  driftY={-14}
        color="oklch(0.91 0.28 128 / 28%)" size="11px"
      />
      <CtaFragment
        text="{}"
        x="90%" y="15%"
        delay={1.8} duration={10} driftY={-10}
        color="oklch(0.91 0.28 128 / 28%)" size="11px"
      />
      <CtaFragment
        text="01"
        x="4%"  y="70%"
        delay={2.5} duration={8}  driftY={-16}
        color="oklch(0.80 0.22 142 / 35%)" size="10px"
      />
      <CtaFragment
        text="//"
        x="88%" y="72%"
        delay={1.0} duration={11} driftY={-12}
        color="oklch(0.80 0.22 142 / 28%)" size="9px"
      />
      <CtaFragment
        text="SYS"
        x="92%" y="44%"
        delay={3.3} duration={12} driftY={-8}
        color="oklch(0.91 0.28 128 / 24%)" size="9px"
      />

      {/* ── Main content with staggered entrance ── */}
      <motion.div
        className="relative mx-auto max-w-2xl"
        variants={enterContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >

        {/* ════════════════════════════════
            1. THE CODE IS MISSING.
            ════════════════════════════════ */}
        <motion.div variants={enterItem} className="mb-4">
          {/* Subtle 1–2 px float */}
          <motion.div
            animate={{ y: [0, -2, 0, -1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* inline-block + overflow-hidden to contain the shimmer sweep */}
            <div className="relative inline-block overflow-hidden">
              <motion.p
                className="glow-cyan font-mono-data text-lg text-primary sm:text-xl"
                animate={{
                  textShadow: [
                    "0 0 8px oklch(0.91 0.28 128 / 45%), 0 0 20px oklch(0.91 0.28 128 / 18%)",
                    "0 0 22px oklch(0.91 0.28 128 / 85%), 0 0 48px oklch(0.91 0.28 128 / 42%)",
                    "0 0 8px oklch(0.91 0.28 128 / 45%), 0 0 20px oklch(0.91 0.28 128 / 18%)",
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                THE CODE IS MISSING.
              </motion.p>

              {/* Horizontal shimmer sweep — runs every ~8 s */}
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 20%, oklch(0.91 0.28 128 / 60%) 50%, transparent 80%)",
                  mixBlendMode: "screen",
                }}
                animate={{ x: ["-180%", "280%"] }}
                transition={{
                  duration: 1.3,
                  delay: 2.5,
                  repeat: Infinity,
                  repeatDelay: 6.5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ════════════════════════════════
            2. THE SYSTEM IS WAITING.
            ════════════════════════════════ */}
        <motion.div variants={enterItem} className="mb-4">
          <motion.p
            className="font-mono-data text-lg sm:text-xl"
            style={{ color: "oklch(0.80 0.22 142)" }}
            animate={{
              textShadow: [
                "0 0 8px oklch(0.80 0.22 142 / 30%)",
                "0 0 24px oklch(0.80 0.22 142 / 70%)",
                "0 0 8px oklch(0.80 0.22 142 / 30%)",
              ],
              opacity: [0.82, 1, 0.82],
            }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            THE SYSTEM IS WAITING.{" "}
            {/* Blinking terminal cursor */}
            <motion.span
              aria-hidden="true"
              style={{
                display: "inline-block",
                lineHeight: 1,
                color: "oklch(0.80 0.22 142)",
              }}
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.44, 0.5, 0.94],
              }}
            >
              _
            </motion.span>
          </motion.p>
        </motion.div>

        {/* ════════════════════════════════
            3. ARE YOU READY?
            ════════════════════════════════ */}
        <motion.div variants={enterItemScale} className="mb-6">
          <motion.p
            className="text-2xl font-bold text-foreground sm:text-3xl"
            animate={{
              y: [0, -3, 0, -1.5, 0],
              textShadow: [
                "0 0 14px oklch(0.91 0.28 128 / 18%)",
                "0 0 32px oklch(0.91 0.28 128 / 44%)",
                "0 0 14px oklch(0.91 0.28 128 / 18%)",
              ],
              filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
          >
            ARE YOU READY?
          </motion.p>
        </motion.div>

        {/* ════════════════════════════════
            BUTTONS
            ════════════════════════════════ */}
        <motion.div
          variants={enterItem}
          className="flex flex-wrap justify-center gap-4 pt-2 mb-5"
        >
          {/* ── REGISTER TEAM ── */}
          <motion.div
            className="relative overflow-hidden"
            animate={
              registerHovered
                ? {}
                : {
                    boxShadow: [
                      "0 0 12px oklch(0.91 0.28 128 / 25%), 0 0 0px oklch(0.91 0.28 128 / 0%)",
                      "0 0 30px oklch(0.91 0.28 128 / 58%), 0 0 55px oklch(0.91 0.28 128 / 16%)",
                      "0 0 12px oklch(0.91 0.28 128 / 25%), 0 0 0px oklch(0.91 0.28 128 / 0%)",
                    ],
                  }
            }
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{
              scale: 1.02,
              y: -3,
              boxShadow:
                "0 6px 40px oklch(0.91 0.28 128 / 65%), 0 0 60px oklch(0.91 0.28 128 / 25%)",
              transition: { duration: 0.18, ease: "easeOut" },
            }}
            onHoverStart={() => setRegisterHovered(true)}
            onHoverEnd={() => setRegisterHovered(false)}
          >
            <Button
              size="lg"
              className="glow-border font-mono-data"
              render={<a href="/register" />}
              nativeButton={false}
            >
              REGISTER TEAM
            </Button>

            {/* Shimmer sweep on hover */}
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, oklch(0.91 0.28 128 / 42%) 50%, transparent 100%)",
              }}
              animate={{ x: registerHovered ? "200%" : "-130%" }}
              transition={{ duration: 0.48, ease: "easeInOut" }}
            />
          </motion.div>

          {/* ── LOGIN ── */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px oklch(0.91 0.28 128 / 0%)",
                "0 0 12px oklch(0.91 0.28 128 / 25%)",
                "0 0 0px oklch(0.91 0.28 128 / 0%)",
              ],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
            whileHover={{
              y: -2,
              boxShadow: "0 4px 24px oklch(0.91 0.28 128 / 42%)",
              transition: { duration: 0.18, ease: "easeOut" },
            }}
          >
            <Button
              size="lg"
              variant="outline"
              className="font-mono-data transition-colors duration-200 hover:border-primary/65 hover:bg-primary/[0.06]"
              render={<a href="/login" />}
              nativeButton={false}
            >
              LOGIN
            </Button>
          </motion.div>
        </motion.div>

        {/* ════════════════════════════════
            STATUS INDICATOR
            ════════════════════════════════ */}
        <motion.div
          variants={enterItem}
          className="flex flex-col items-center gap-1"
        >
          <div className="flex items-center gap-2">
            {/* Blinking status dot */}
            <motion.span
              className="text-[11px] leading-none"
              style={{ color: "oklch(0.80 0.22 142)" }}
              animate={{ opacity: [1, 0.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ●
            </motion.span>

            {/* Label with opacity pulse */}
            <motion.span
              className="font-mono-data text-[11px] tracking-widest"
              style={{ color: "oklch(0.80 0.22 142 / 75%)" }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              SYSTEM_READY
            </motion.span>
          </div>

          <p className="font-mono-data text-[10px] tracking-widest text-muted-foreground/40">
            WAITING_FOR_TEAM...
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
