"use client";

import { use } from "react";
import { industries } from "@/lib/industries";
import { notFound } from "next/navigation";
import { useQuote } from "@/components/QuoteDrawer";
import Link from "next/link";

export default function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const industry = industries.find((i) => i.slug === slug);
  const { openQuote } = useQuote();

  if (!industry) notFound();

  return (
    <div className="bg-dark-900 text-slate-100 min-h-screen">
      <section className="relative overflow-hidden border-b border-white/10 bg-dark-950 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-cyan">
            {industry.title} Industry Vertical
          </span>
          <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            {industry.subtitle}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            {industry.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => openQuote(industry.title)}
              className="btn-primary"
            >
              Schedule Vertical Architecture Call →
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-purple">
              Domain Architecture Capabilities
            </h2>
            <ul className="mt-6 space-y-3">
              {industry.keyFeatures.map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-purple/20 text-brand-purple text-xs font-bold">
                    ✓
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
              Featured Case Study
            </h2>
            <div className="mt-4">
              <span className="text-xs text-slate-400 block">{industry.caseStudy.client}</span>
              <h3 className="text-xl font-bold text-white mt-1">{industry.caseStudy.title}</h3>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                {industry.caseStudy.description}
              </p>
              <div className="mt-4 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 p-3 text-xs text-brand-emerald font-semibold">
                Impact: {industry.caseStudy.impact}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="glass-card text-center rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-white">Need a Custom {industry.title} System?</h2>
          <p className="mt-2 text-sm text-slate-400 max-w-md mx-auto">
            Book a 30-minute discovery session with our software engineering team to review your technical specs.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button onClick={() => openQuote(industry.title)} className="btn-primary">
              Schedule Consultation →
            </button>
            <Link href="/industries" className="btn-secondary">
              Back to Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
