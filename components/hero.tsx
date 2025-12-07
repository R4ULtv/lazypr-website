"use client";

import Link from "fumadocs-core/link";
import { ArrowRightIcon, CopyIcon, CheckIcon } from "lucide-react";
import { useCallback, useState } from "react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const installCommand = "npm install -g lazypr";

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-fd-card px-4 py-1.5 mb-8">
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fd-primary opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-fd-primary" />
          </span>
          <span className="font-mono text-sm text-fd-muted-foreground">
            Powered by AI (Groq & Cerebras)
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-fd-foreground mb-6 text-balance">
          The lazy way to write{" "}
          <span className="text-fd-primary">pull requests</span>
        </h1>

        <p className="text-lg sm:text-xl text-fd-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Generate clean, consistent PR titles and descriptions from your
          commits. Just run the command and let AI do the heavy lifting.
        </p>

        {/* Install Command */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-primary-foreground dark:bg-fd-card dark:border-input h-10 rounded-md px-4 w-auto">
            <span className="text-fd-primary">$</span>
            <code className="text-fd-foreground flex-1">{installCommand}</code>
            <button
              onClick={handleCopy}
              className="text-fd-muted-foreground hover:text-fd-foreground transition-colors p-1"
              aria-label="Copy install command"
            >
              {copied ? (
                <CheckIcon className="size-4 text-fd-primary" />
              ) : (
                <CopyIcon className="size-4" />
              )}
            </button>
          </div>
          <Link href="/docs/quick-start">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-fd-ring focus-visible:ring-fd-ring/50 focus-visible:ring-[3px] h-10 rounded-md px-6 has-[>svg]:px-4 w-full sm:w-auto bg-fd-foreground text-fd-background hover:bg-fd-foreground/90 font-mono">
              Get Started
              <ArrowRightIcon className="ml-2 size-4" />
            </button>
          </Link>
        </div>

        {/* Terminal Preview */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg border border-border bg-fd-card overflow-hidden shadow-2xl shadow-black/20">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-fd-secondary/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
              </div>
              <span className="font-mono text-xs text-fd-muted-foreground ml-2">
                ~/my-project
              </span>
            </div>
            <div className="p-4 font-mono text-sm space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span className="text-fd-primary">$</span>
                <span className="text-fd-foreground">lazypr main</span>
              </div>
              <div className="text-muted-foreground">
                <span className="text-fd-primary">✓</span> Found 5 commits ahead
                of main
              </div>
              <div className="text-fd-muted-foreground">
                <span className="text-fd-primary">✓</span> Generating PR
                content...
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-fd-muted-foreground mb-2">Title:</div>
                <div className="text-fd-foreground">
                  feat: Add user authentication with OAuth support
                </div>
              </div>
              <div className="mt-3">
                <div className="text-fd-muted-foreground mb-2">
                  Description:
                </div>
                <div className="text-fd-foreground/80 text-xs leading-relaxed">
                  ## Changes
                  <br />- Implemented OAuth 2.0 authentication flow
                  <br />- Added session management with secure cookies
                  <br />- Created login/logout endpoints
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
