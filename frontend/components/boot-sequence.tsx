"use client";

import { useEffect, useState } from "react";

const LINES = [
  "SYSTEM INITIALIZING...",
  "SECURITY BREACH DETECTED",
  "MASTER CODE: MISSING",
  "RECRUITING INVESTIGATORS",
  "DIGIHUNT ONLINE",
];

const LINE_DELAY_MS = 300; // gap between lines appearing
const HOLD_MS = 600; // pause after the last line before fading out
const FADE_MS = 300; // css transition duration, kept in sync with the class below

export function BootSequence() {
  // null = still deciding (avoids a flash on reduced-motion / no-JS-timing
  // edge cases); true = overlay visible; false = dismissed.
  const [visible, setVisible] = useState<boolean | null>(null);
  const [lineCount, setLineCount] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setVisible(false);
      return;
    }
    setVisible(true);

    const timers: ReturnType<typeof setTimeout>[] = [];
    LINES.forEach((_, i) => {
      timers.push(
        setTimeout(() => setLineCount(i + 1), i * LINE_DELAY_MS)
      );
    });
    const totalReveal = LINES.length * LINE_DELAY_MS;
    timers.push(setTimeout(() => setFading(true), totalReveal + HOLD_MS));
    timers.push(
      setTimeout(() => setVisible(false), totalReveal + HOLD_MS + FADE_MS)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  function skip() {
    setVisible(false);
  }

  if (visible === null || visible === false) return null;

  return (
    <div
      role="dialog"
      aria-label="Boot sequence"
      onClick={skip}
      className={`fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center gap-3 bg-background px-6 transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="font-mono-data text-sm text-primary sm:text-base">
        {LINES.slice(0, lineCount).map((line) => (
          <p key={line} className="glow-cyan py-0.5">
            {"> "}
            {line}
          </p>
        ))}
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          skip();
        }}
        className="mt-6 border border-border px-4 py-1.5 font-mono-data text-xs uppercase tracking-[0.22em] text-muted-foreground outline-none transition-all duration-200 hover:border-primary/65 hover:text-primary hover:shadow-[0_0_12px_oklch(0.91_0.28_128/30%)] focus:ring-2 focus:ring-ring"
      >
        [ SKIP ]
      </button>
    </div>
  );
}
