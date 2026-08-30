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
import { BootSequence } from "@/components/boot-sequence";

const ROUNDS = [
  {
    id: "01",
    name: "The Digital Trail",
    theme: "Find the clues.",
    body: "Easy technical MCQs and clues — binary, morse, basic cryptography, logic, riddles, QR-code clues, basic cybersecurity concepts.",
    output: "Code Fragments → Access Key",
  },
  {
    id: "02",
    name: "Digital Detectives",
    theme: "Investigate the incident.",
    body: "A simulated Digital Incident Case File — server logs, timestamps, suspicious emails, user activity, code snippets. Determine WHO, WHAT, WHEN, HOW, WHY.",
    output: "Investigation Complete → Round 3 Unlocked",
  },
  {
    id: "03",
    name: "The Final Hack",
    theme: "Build the solution.",
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
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border px-6 py-28 sm:py-36">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="font-mono-data text-accent-foreground animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both delay-0">
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
          <div className="mt-4 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both delay-[600ms]">
            <Button
              size="lg"
              className="glow-border font-mono-data"
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
      </section>

      {/* STORY */}
      <section id="story" className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
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
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-10 text-center font-mono-data text-sm tracking-widest text-primary">
            HOW IT WORKS
          </h3>
          <div className="flex flex-col items-center gap-3 font-mono-data text-sm sm:flex-row sm:justify-center sm:gap-6">
            {["01 FIND", "02 INVESTIGATE", "03 BUILD", "MASTER CODE"].map(
              (step, i, arr) => (
                <div key={step} className="flex items-center gap-3 sm:gap-6">
                  <span className="glow-border rounded-md border border-border bg-card px-4 py-2 text-foreground">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-primary sm:rotate-0 rotate-90">
                      →
                    </span>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ROUNDS */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-10 text-center font-mono-data text-sm tracking-widest text-primary">
            THE THREE ROUNDS
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {ROUNDS.map((r) => (
              <Card key={r.id} className="glow-border">
                <CardHeader>
                  <span className="font-mono-data text-xs text-secondary">
                    ROUND {r.id}
                  </span>
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
            ))}
          </div>
        </div>
      </section>

      {/* CASE FILES */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-10 text-center font-mono-data text-sm tracking-widest text-primary">
            CASE FILES
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CASES.map((c) => (
              <Card key={c.n} className="text-center">
                <CardContent className="py-6">
                  <p className="font-mono-data text-xs text-muted-foreground">
                    CASE {c.n}
                  </p>
                  <p className="mt-2 font-semibold text-foreground">
                    {c.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-6 font-mono-data text-sm tracking-widest text-primary">
            TECHNOLOGY
          </h3>
          <p className="mb-6 text-muted-foreground">
            Participants may use any of the following to build their Round 3
            solution:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {TECH.map((t) => (
              <Badge key={t} variant="secondary" className="font-mono-data">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* RULES */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h3 className="mb-8 text-center font-mono-data text-sm tracking-widest text-primary">
            RULES
          </h3>
          <ul className="space-y-3">
            {RULES.map((r) => (
              <li
                key={r}
                className="flex gap-3 rounded-md border border-border bg-card p-4 text-sm text-muted-foreground"
              >
                <span className="font-mono-data text-primary">›</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h3 className="mb-8 text-center font-mono-data text-sm tracking-widest text-primary">
            FAQ
          </h3>
          <Accordion multiple={false}>
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-28 text-center">
        <div className="mx-auto max-w-2xl space-y-4">
          <p className="glow-cyan font-mono-data text-lg text-primary sm:text-xl">
            THE CODE IS MISSING.
          </p>
          <p className="font-mono-data text-lg text-secondary sm:text-xl">
            THE SYSTEM IS WAITING.
          </p>
          <p className="text-2xl font-bold text-foreground sm:text-3xl">
            ARE YOU READY?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="glow-border font-mono-data"
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
        </div>
      </section>
    </main>
  );
}
