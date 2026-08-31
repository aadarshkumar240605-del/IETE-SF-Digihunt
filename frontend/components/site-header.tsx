"use client";

import { Crosshair } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex items-center px-4 py-3">
        <a
          href="/"
          aria-label="DigiHunt — The Missing Code"
          className="group flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]"
        >
          {/* Icon */}
          <span className="relative flex items-center justify-center">
            {/* Idle subtle pulse ring */}
            <span className="absolute inset-0 rounded-full opacity-30 animate-pulse bg-primary/20 group-hover:opacity-0 transition-opacity duration-300" />
            {/* Hover glow ring */}
            <span className="absolute inset-[-4px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_16px_4px_oklch(0.91_0.28_128/50%)]" />
            <Crosshair
              className="relative z-10 size-6 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_oklch(0.91_0.28_128/90%)]"
              strokeWidth={1.5}
            />
          </span>

          {/* Text stack */}
          <span className="flex flex-col leading-none">
            <span className="font-bold tracking-widest text-primary text-sm sm:text-base transition-all duration-300 group-hover:drop-shadow-[0_0_6px_oklch(0.91_0.28_128/60%)]">
              DIGIHUNT
            </span>
            <span className="font-mono-data text-[0.6rem] tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-primary/70 sm:text-[0.65rem]">
              THE MISSING CODE
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}
