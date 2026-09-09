"use client";

import Link from "next/link";
import { industries } from "@/lib/industries";
import { useQuote } from "@/components/QuoteDrawer";

export default function IndustriesPage() {
  const { openQuote } = useQuote();

  return (
    <div className="bg-dark-900 text-slate-100 min-h-screen">
      <section className="relative overflow-hidden border-b border-white/10 bg-dark-950 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-cyan">
            Domain Specializations
          </span>
          <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Industry Solutions Engineered for Impact
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            BurjSoft brings deep domain understanding in Fintech &amp; Payroll, Logistics, PropTech, and Industrial Field Operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => openQuote("Industry Verticals Consultation")}
              className="btn-primary"
            >
              Consult Industry Lead →
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {industries.map((ind) => (
            <article key={ind.href} className="glass-card flex flex-col justify-between rounded-3xl p-8">
              <div>
                <span className="inline-flex rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-brand-purple mb-4">
                  {ind.title}
                </span>
                <h2 className="text-2xl font-bold text-white">{ind.subtitle}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{ind.summary}</p>

                <div className="mt-6 grid grid-cols-3 gap-2 rounded-2xl bg-white/5 p-4 border border-white/10 text-center">
                  {ind.stats.map((st) => (
                    <div key={st.label}>
                      <div className="font-mono text-lg font-bold text-white">{st.value}</div>
                      <div className="text-[10px] text-slate-400">{st.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Case Study Highlight
                  </span>
                  <div className="rounded-xl bg-white/5 p-3 text-xs text-slate-300">
                    <span className="font-bold text-white block">{ind.caseStudy.title}</span>
                    <span className="text-slate-400 block mt-1">{ind.caseStudy.impact}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                <Link href={ind.href} className="btn-secondary text-xs">
                  View Vertical Solution →
                </Link>
                <button
                  type="button"
                  onClick={() => openQuote(ind.title)}
                  className="text-xs font-semibold text-brand-indigo hover:text-white"
                >
                  Book Discovery Call
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
