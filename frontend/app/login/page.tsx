"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ApiError, login } from "@/lib/api";

const inputClass =
  "w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground font-mono-data outline-none focus:ring-2 focus:ring-ring";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [deniedAccess, setDeniedAccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setDeniedAccess(false);
    setSubmitting(true);
    try {
      const result = await login(email.trim(), password);
      if (result.role === "admin") router.push("/admin");
      else if (result.role === "judge") router.push("/judge");
      else router.push("/dashboard");
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        setDeniedAccess(true);
      } else {
        setError(err instanceof ApiError ? err.message : "Login failed.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-16">
      <div className="w-full max-w-md space-y-8">
        {/* ── Page-level heading — mirrors Registration page pattern ── */}
        <div className="text-center">
          <h1 className="glow-cyan font-mono-data text-3xl font-bold text-primary">
            DIGIHUNT // LOGIN
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your credentials to access the hunt.
          </p>
        </div>

        <Card className="glow-border w-full">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="login-email"
                  className="font-mono-data text-xs uppercase tracking-wide text-secondary"
                >
                  Email
                </label>
                <input
                  id="login-email"
                  className={inputClass}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="login-password"
                  className="font-mono-data text-xs uppercase tracking-wide text-secondary"
                >
                  Password
                </label>
                <input
                  id="login-password"
                  className={inputClass}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
              </div>

              {deniedAccess && (
                <p className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 font-mono-data text-sm text-destructive">
                  ACCESS DENIED — invalid email or password.
                </p>
              )}
              {error && (
                <p className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 font-mono-data text-sm text-destructive">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="glow-border w-full font-mono-data"
                disabled={submitting}
              >
                {submitting ? "AUTHENTICATING..." : "ENTER THE HUNT"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
