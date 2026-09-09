"use client";

import { site, whyChoose } from "@/lib/site";
import { useQuote } from "@/components/QuoteDrawer";

export default function AboutPage() {
  const { openQuote } = useQuote();

  return (
    <div className="bg-dark-900 text-slate-100 min-h-screen">
      <section className="relative overflow-hidden border-b border-white/10 bg-dark-950 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-purple">
            About BurjSoft
          </span>
          <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Engineering Mission-Critical Software Systems
          </h1>
          <p className="mt-4 max-w-3xl text-base text-slate-400 sm:text-lg">
            BurjSoft is a custom software engineering company registered as a U.S. LLC based in Miami, Florida. With a global team of over 100 senior software engineers, we act as an extended engineering core for high-growth enterprises.
          </p>
          <div className="mt-8">
            <button onClick={() => openQuote("About Us Strategy Call")} className="btn-primary">
              Schedule Architecture Consultation →
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 sm:px-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Our Philosophy</span>
          <h2 className="mt-2 text-3xl font-bold text-white">Long-Term Engineering Partnerships</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Unlike transactional dev agencies, BurjSoft focuses on multi-year strategic engagements (averaging 6+ years). We assign dedicated senior developers who embed directly into your repositories, rituals, and release cycles.
          </p>
          <blockquote className="mt-6 border-l-2 border-brand-purple pl-4 font-sans text-base text-slate-200 italic">
            “We measure our success by the stability, velocity, and uptime of the systems we build for our enterprise partners.”
            <footer className="mt-2 font-mono text-xs text-slate-400 not-italic">— BurjSoft Engineering Directorate</footer>
          </blockquote>
        </div>

        <div className="glass-card rounded-3xl p-8">
          <h3 className="text-lg font-bold text-white mb-4">Core Operating Principles</h3>
          <ul className="space-y-3">
            {whyChoose.map((item) => (
              <li key={item} className="flex items-start gap-3 text-xs text-slate-300">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-emerald/20 text-brand-emerald text-[10px] font-bold mt-0.5">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark-950/60 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
          {[
            [site.stats.engineers, "Global Senior Engineers"],
            [site.stats.engagementYears, "Average Client Engagement"],
            [site.stats.projectsDelivered, "Enterprise Applications Built"],
            ["Miami, FL", "US LLC Corporate HQ"],
          ].map(([k, v]) => (
            <div key={v} className="glass-card rounded-2xl p-6 text-center">
              <p className="font-mono text-3xl font-extrabold text-white">{k}</p>
              <p className="mt-2 text-xs text-slate-400">{v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
