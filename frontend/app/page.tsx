import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations/fade-in";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/stagger-container";
import { HeroSection } from "@/components/hero-section";
import { BootSequence } from "@/components/boot-sequence";
import { HeroCTA } from "@/components/hero-cta";
import { StoryVisual } from "@/components/story-visual";
import { Search, Fingerprint, Terminal, FolderLock } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   Reusable terminal-style metadata label.
   Pure presentational — no client code needed.
───────────────────────────────────────────────────────── */
function SysLabel({
  text,
  className = "",
  blink = false,
  fade = false,
}: {
  text: string;
  className?: string;
  blink?: boolean;
  fade?: boolean;
}) {
  const anim = blink ? "sys-blink" : fade ? "sys-fade" : "";
  return (
    <span
      aria-hidden="true"
      className={`sys-label absolute select-none pointer-events-none ${anim} ${className}`}
    >
      {text}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────
   Reusable blinking status dot + label row.
───────────────────────────────────────────────────────── */
function SysDot({
  label,
  className = "",
  green = false,
}: {
  label: string;
  className?: string;
  green?: boolean;
}) {
  const dotColor = green
    ? "text-secondary/75"
    : "text-primary/75";
  return (
    <span
      aria-hidden="true"
      className={`sys-label absolute flex items-center gap-1 select-none pointer-events-none ${className}`}
    >
      <span className={`sys-blink ${dotColor}`}>●</span>
      <span className="text-primary/50">{label}</span>
    </span>
  );
}

const ROUNDS = [
  {
    id: "01",
    name: "The Digital Trail",
    theme: "Find the clues.",
    icon: Search,
    tag: "DISCOVERY",
    body: "Easy technical MCQs and clues — binary, morse, basic cryptography, logic, riddles, QR-code clues, basic cybersecurity concepts.",
    output: "Code Fragments → Access Key",
  },
  {
    id: "02",
    name: "Digital Detectives",
    theme: "Investigate the incident.",
    icon: Fingerprint,
    tag: "INVESTIGATION",
    body: "A simulated Digital Incident Case File — server logs, timestamps, suspicious emails, user activity, code snippets. Determine WHO, WHAT, WHEN, HOW, WHY.",
    output: "Investigation Complete → Round 3 Unlocked",
  },
  {
    id: "03",
    name: "The Final Hack",
    theme: "Build the solution.",
    icon: Terminal,
    tag: "EXECUTION",
    body: "Each team receives one case and designs a software solution/prototype concept, presented as a PowerPoint uploaded to the platform.",
    output: "Judged submission → Master Terminal",
  },
];

const CASES = [
  { n: "01", name: "Password Attack" },
  { n: "02", name: "Phishing Attack" },
  { n: "03", name: "Data Leakage" },
  { n: "04", name: "Encryption Incident" },
];

const TECH = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Scratch",
  "MIT App Inventor",
  "No-code platforms",
  "AI tools",
  "PowerPoint",
];

const RULES = [
  "Each team has exactly 3 members, each with an individual login.",
  "Competition progress is shared across the whole team.",
  "A clue can only be actively worked on by one member at a time.",
  "Once a clue is solved, it is solved for the entire team.",
  "Round unlocking is controlled by the system, not by request.",
  "The Master Code is never shown to the frontend — enter it, don't guess it.",
];

const FAQ = [
  {
    q: "How many people per team?",
    a: "Exactly 3. Each member registers with their own email and password.",
  },
  {
    q: "Do we need to know cybersecurity to compete?",
    a: "No. Round 1 and Round 2 are intentionally easy — built for first-year students. The challenge is collaboration, story, and discovery, not advanced technical knowledge.",
  },
  {
    q: "What do we submit for Round 3?",
    a: "A PowerPoint describing your proposed solution to the case you're assigned — problem, findings, solution, UI, how it works, tech, impact, future scope.",
  },
  {
    q: "Can we replace our Round 3 submission?",
    a: "Yes, any team member can re-upload before the deadline. After the deadline, the submission locks.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <BootSequence />
      <HeroSection />

      {/* ═══════════════════════════════════════════
          STORY
      ═══════════════════════════════════════════ */}
      <section id="story" className="relative border-b border-border px-6 py-20">
        {/* Section-level terminal metadata */}
        <SysLabel text="MISSION_LOG" className="top-3 left-4 text-primary/45" fade />
        <SysLabel text="CASE_FILE_01" className="top-3 right-4 text-primary/45" />
        <SysDot label="STATUS: DECRYPTING" className="bottom-3 right-4" green />

        <div className="mx-auto max-w-6xl">
          <FadeIn className="grid items-center gap-10 lg:grid-cols-2">
            {/* Visual — left on desktop */}
            <StoryVisual />

            {/* Text — right on desktop, always visible */}
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="font-mono-data text-sm tracking-widest text-primary">
                THE STORY
              </h3>
              <p className="text-lg text-foreground">
                A critical digital system has been compromised. The system&apos;s
                Master Code has been fragmented and hidden.
              </p>
              <p className="text-muted-foreground">
                Teams must recover the fragments, investigate the simulated
                security incident, and design a solution to the vulnerability
                they discover. The final objective is to unlock the Master
                Terminal.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════ */}
      <section className="relative border-b border-border px-6 py-20">
        {/* Section-level metadata */}
        <SysLabel text="// SYS_PROCESS" className="top-3 right-4 text-primary/45" fade />
        <SysLabel text="SEQ_ACTIVE" className="bottom-3 left-4 text-secondary/52" />

        <div className="mx-auto max-w-6xl">
          <h3 className="mb-10 text-center font-mono-data text-sm tracking-widest text-primary">
            HOW IT WORKS
          </h3>

          {/* Thin horizontal accent above the step row */}
          <div
            aria-hidden="true"
            className="mx-auto mb-6 h-px max-w-xl"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, oklch(0.78 0.15 195 / 20%) 30%, oklch(0.78 0.15 195 / 35%) 50%, oklch(0.78 0.15 195 / 20%) 70%, transparent 100%)",
            }}
          />

          <StaggerContainer className="flex flex-col items-center gap-3 font-mono-data text-sm sm:flex-row sm:justify-center sm:gap-6">
            {["01 FIND", "02 INVESTIGATE", "03 BUILD", "MASTER CODE"].map(
              (step, i, arr) => (
                <StaggerItem key={step} className="flex items-center gap-3 sm:gap-6">
                  <span className="glow-border rounded-md border border-border bg-card px-4 py-2 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_0_16px_oklch(0.78_0.15_195/40%)] hover:border-primary/60 cursor-default select-none">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-primary transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_6px_oklch(0.78_0.15_195/70%)] sm:rotate-0 rotate-90">
                      →
                    </span>
                  )}
                </StaggerItem>
              )
            )}
          </StaggerContainer>

          {/* Thin horizontal accent below the step row */}
          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-px max-w-xl"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, oklch(0.78 0.15 195 / 20%) 30%, oklch(0.78 0.15 195 / 35%) 50%, oklch(0.78 0.15 195 / 20%) 70%, transparent 100%)",
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THREE ROUNDS
      ═══════════════════════════════════════════ */}
      <section className="relative border-b border-border px-6 py-20">
        <SysLabel text="MODULE_ROUNDS" className="top-3 right-4 text-primary/45" fade />
        <SysDot label="NODES: 3" className="bottom-3 left-4" />

        <div className="mx-auto max-w-6xl">
          <h3 className="mb-10 text-center font-mono-data text-sm tracking-widest text-primary">
            THE THREE ROUNDS
          </h3>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {ROUNDS.map((r) => {
              const RoundIcon = r.icon;
              return (
                <StaggerItem key={r.id}>
                  <Card className="glow-border relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_28px_oklch(0.78_0.15_195/18%)]">
                    {/* Round system identity label — top-right corner of card */}
                    <span
                      aria-hidden="true"
                      className="sys-label sys-fade-slow absolute right-2.5 top-2 text-primary/42"
                    >
                      // {r.tag}
                    </span>
                    <CardHeader>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-mono-data text-xs text-secondary">
                          ROUND {r.id}
                        </span>
                        <RoundIcon
                          className="size-4 text-primary/60 transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_6px_oklch(0.78_0.15_195/70%)]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <CardTitle className="text-xl">{r.name}</CardTitle>
                      <p className="font-mono-data text-xs uppercase tracking-wide text-muted-foreground">
                        {r.theme}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{r.body}</p>
                      <Separator />
                      <p className="font-mono-data text-xs text-primary">
                        {r.output}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CASE FILES
      ═══════════════════════════════════════════ */}
      <section className="relative border-b border-border px-6 py-20">
        <SysLabel text="CLASSIFIED_DB" className="top-3 right-4 text-primary/45" fade />
        <SysLabel text="ACCESS_LEVEL: 0" className="top-3 left-4 text-secondary/48" />
        <SysDot label="ENCRYPTED" className="bottom-3 right-4" green />

        <div className="mx-auto max-w-6xl">
          <h3 className="mb-10 text-center font-mono-data text-sm tracking-widest text-primary">
            CASE FILES
          </h3>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CASES.map((c) => (
              <StaggerItem key={c.n}>
                <Card className="relative text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_oklch(0.78_0.15_195/14%)] group">
                  {/* Tiny case ID label — card top-right */}
                  <span
                    aria-hidden="true"
                    className="sys-label absolute right-2 top-1.5 text-primary/42"
                  >
                    ENC_{c.n}
                  </span>
                  <CardContent className="py-6">
                    <div className="mb-3 flex items-center justify-center">
                      <FolderLock
                        className="size-5 text-primary/50 transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_6px_oklch(0.78_0.15_195/60%)]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="font-mono-data text-[10px] tracking-widest text-muted-foreground/70">
                      CLASSIFIED · CASE {c.n}
                    </p>
                    <p className="mt-1.5 font-semibold text-foreground">
                      {c.name}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TECHNOLOGY
      ═══════════════════════════════════════════ */}
      <section className="relative border-b border-border px-6 py-24">
        <SysLabel text="MODULE_TECH" className="top-3 right-4 text-primary/45" fade />

        <FadeIn className="mx-auto max-w-5xl">
          {/* Section header */}
          <div className="mb-10 text-center">
            <h3 className="font-mono-data text-base tracking-widest text-primary">
              TECHNOLOGY
            </h3>
            <p className="mt-2 font-mono-data text-[10px] tracking-widest text-muted-foreground/60">
              — PERMITTED TOOLS —
            </p>
          </div>

          {/* Tech panel */}
          <div className="relative overflow-hidden rounded-lg border border-primary/15 bg-card/40 px-8 py-10 shadow-[0_0_40px_oklch(0.78_0.15_195/6%)]">
            {/* Corner bracket decorations — existing */}
            <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3 font-mono-data text-[10px] text-primary/20 select-none">[</span>
            <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 font-mono-data text-[10px] text-primary/20 select-none">]</span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 font-mono-data text-[10px] text-primary/20 select-none">{`{`}</span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 font-mono-data text-[10px] text-primary/20 select-none">{`}`}</span>
            {/* Existing terminal comment */}
            <span aria-hidden="true" className="pointer-events-none absolute left-8 top-3 font-mono-data text-[9px] text-primary/22 select-none tracking-widest">// ROUND_3_PERMITTED_STACK</span>
            {/* New: bottom-right label */}
            <span aria-hidden="true" className="sys-label sys-fade absolute bottom-3 right-8 text-secondary/50">TOOLS_LOADED</span>

            <p className="mb-8 text-center text-muted-foreground">
              Participants may use any of the following to build their Round 3 solution:
            </p>
            <StaggerContainer className="flex flex-wrap justify-center gap-3">
              {TECH.map((t) => (
                <StaggerItem key={t}>
                  <Badge
                    variant="secondary"
                    className="font-mono-data text-sm px-3 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.08] hover:shadow-[0_0_10px_oklch(0.78_0.15_195/35%)] cursor-default"
                  >
                    {t}
                  </Badge>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════════════════════════════════════
          RULES
      ═══════════════════════════════════════════ */}
      <section className="relative border-b border-border px-6 py-24">
        <SysLabel text="// SYS_PROTOCOL" className="top-3 right-4 text-primary/45" fade />
        <SysDot label="ENFORCEMENT: ON" className="top-3 left-4" />

        <FadeIn className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-10 text-center">
            <h3 className="font-mono-data text-base tracking-widest text-primary">
              RULES
            </h3>
            <p className="mt-2 font-mono-data text-[10px] tracking-widest text-muted-foreground/60">
              — MISSION PROTOCOLS —
            </p>
          </div>

          {/* Protocol panel */}
          <div className="relative overflow-hidden rounded-lg border border-primary/15 bg-card/40 px-8 py-8 shadow-[0_0_40px_oklch(0.78_0.15_195/6%),inset_0_0_0_1px_oklch(0.78_0.15_195/4%)]">
            {/* Existing corner decorations */}
            <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3 font-mono-data text-[9px] text-primary/40 select-none tracking-widest">PROTO_v2</span>
            <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 font-mono-data text-[9px] text-primary/40 select-none">SYS::RULES</span>
            {/* New: bottom-left */}
            <span aria-hidden="true" className="sys-label sys-fade-slow absolute bottom-3 left-3 text-primary/40">SECURITY_RULES</span>

            <ul className="space-y-4">
              {RULES.map((r, i) => (
                <li
                  key={r}
                  className="flex gap-4 rounded-md border border-border bg-background/60 px-5 py-4 text-base text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
                >
                  <span className="font-mono-data text-xs font-bold text-primary/60 shrink-0 w-7 pt-0.5 text-right tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono-data text-primary shrink-0 pt-px">›</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
      <section className="relative border-b border-border px-6 py-24">
        <SysLabel text="// SYS_HELP" className="top-3 left-4 text-primary/45" fade />
        <SysLabel text="QUERY_DATABASE" className="top-3 right-4 text-primary/45" />

        <FadeIn className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-10 text-center">
            <h3 className="font-mono-data text-base tracking-widest text-primary">
              FAQ
            </h3>
            <p className="mt-2 font-mono-data text-[10px] tracking-widest text-muted-foreground/60">
              — SYSTEM QUERIES —
            </p>
          </div>

          {/* FAQ panel */}
          <div className="relative overflow-hidden rounded-lg border border-primary/15 bg-card/40 px-8 py-6 shadow-[0_0_40px_oklch(0.78_0.15_195/6%)]">
            {/* Existing top-right label */}
            <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 font-mono-data text-[9px] text-primary/40 select-none">FAQ::OPEN</span>
            {/* New: bottom-left */}
            <span aria-hidden="true" className="sys-label sys-fade absolute bottom-3 left-3 text-secondary/50">HELP_PROTOCOL</span>

            <Accordion multiple={false}>
              {FAQ.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-primary/10 last:border-0"
                >
                  <AccordionTrigger className="py-5 text-base font-medium text-foreground hover:text-primary hover:no-underline transition-colors duration-200">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </section>

      {/* FINAL CTA */}
      <HeroCTA />
    </main>
  );
}
