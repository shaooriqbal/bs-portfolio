"use client";

import Link from "next/link";
import { FAQ } from "./FAQ";
import { useQuote } from "./QuoteDrawer";
import type { Service } from "@/lib/services";

export function ServicePage({ service }: { service: Service }) {
  const { openQuote } = useQuote();

  return (
    <div className="bg-dark-900 text-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-dark-950 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-brand-purple/15 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-purple backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-purple animate-pulse" />
              {service.badge || "BurjSoft Enterprise Engineering"}
            </span>

            <h1 className="max-w-4xl font-sans text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-tight">
              {service.hero}
            </h1>

            <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
              {service.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openQuote(service.shortTitle)}
                className="btn-primary"
              >
                Schedule Architecture Review →
              </button>
              <Link href="/contact-us" className="btn-secondary">
                Request Engineering Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix Banner */}
      {service.techStack && (
        <section className="border-b border-white/10 bg-dark-900 py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Target Stack & Tools
            </span>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Problems & Solutions Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
              Challenges Solved
            </h2>
            <h3 className="mt-2 text-2xl font-bold text-white">Engineering Pain Points We Address</h3>
            <ul className="mt-6 space-y-3">
              {service.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold mt-0.5">
                    ✕
                  </span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
              What We Deliver
            </h2>
            <h3 className="mt-2 text-2xl font-bold text-white">Included Architectural Services</h3>
            <ul className="mt-6 space-y-3">
              {service.includes.map((inc) => (
                <li key={inc} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-emerald/20 text-brand-emerald text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Development Process Timeline */}
      <section className="border-t border-b border-white/10 bg-dark-950/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-indigo">
              Methodology
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Engineering Execution Process
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <div key={step.title} className="glass-card relative rounded-2xl p-6">
                <span className="font-mono text-3xl font-extrabold text-white/20">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-400">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies if present */}
      {service.cases && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">
            Proven Results
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">Case Studies</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {service.cases.map((c) => (
              <div key={c.title} className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white">{c.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{c.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="mb-6 text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <FAQ items={service.faqs} />
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="glass-card relative overflow-hidden rounded-3xl p-10 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 via-brand-indigo/10 to-brand-cyan/10 pointer-events-none" />
          <h2 className="font-sans text-3xl font-bold text-white">
            Ready to Build Your Enterprise Software?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            Consult directly with BurjSoft’s lead software architects to plan your product roadmap, sprint timeline, and engineering team size.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => openQuote(service.shortTitle)}
              className="btn-primary"
            >
              Book Architecture Review →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
