"use client";

import Link from "next/link";
import { homeFaqs, site, whyChoose, techStackList } from "@/lib/site";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { FAQ } from "@/components/FAQ";
import { useQuote } from "@/components/QuoteDrawer";

export default function HomePage() {
  const { openQuote } = useQuote();

  return (
    <div className="bg-dark-900 text-slate-100 overflow-hidden">
      {/* 🚀 Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-dark-950 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-brand-purple/20 blur-[140px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-brand-cyan/15 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-brand-purple backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-brand-purple animate-ping" />
                Miami LLC Governance · 100+ Global Software Engineers
              </div>

              <h1 className="mt-6 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:leading-[1.1]">
                Purpose-Built Custom Software for{" "}
                <span className="text-gradient-purple">Enterprise Scale.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                BurjSoft engineers mission-critical software systems for Fintech, Logistics, Real Estate (PropTech), and Field Engineering teams. Senior software developer pods with a proven 6-year average client engagement.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => openQuote("Hero Strategy Call")}
                  className="btn-primary"
                >
                  Schedule Strategy Call →
                </button>
                <Link href="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Simulated High-Tech System Architecture Preview Card */}
            <div className="glass-card relative overflow-hidden rounded-3xl p-6 shadow-2xl border border-white/15">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-slate-400">burjsoft-architecture.config.ts</span>
              </div>

              <div className="mt-4 font-mono text-xs text-slate-300 leading-relaxed space-y-2 overflow-x-auto">
                <p className="text-slate-500">// BurjSoft Enterprise Architectural Core</p>
                <p>
                  <span className="text-brand-purple">export const</span> <span className="text-brand-cyan">burjSoftEngine</span> = &#123;
                </p>
                <p className="pl-4">
                  governance: <span className="text-emerald-400">&quot;Miami LLC (US Law &amp; IP Protection)&quot;</span>,
                </p>
                <p className="pl-4">
                  teamScale: <span className="text-amber-300">100</span> <span className="text-slate-400">// Senior Engineers</span>,
                </p>
                <p className="pl-4">
                  specializations: [
                </p>
                <p className="pl-8 text-brand-blue">&quot;Fintech &amp; EWA Payroll&quot;,</p>
                <p className="pl-8 text-brand-blue">&quot;Logistics &amp; Fleet Telematics&quot;,</p>
                <p className="pl-8 text-brand-blue">&quot;PropTech Lead Capture &amp; MLS&quot;,</p>
                <p className="pl-8 text-brand-blue">&quot;Industrial Field Engineering&quot;</p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  deploymentStatus: <span className="text-emerald-400">&quot;PROD_ACTIVE 99.99% SLA&quot;</span>
                </p>
                <p>&#125;;</p>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl bg-white/5 p-3 border border-white/10 text-xs">
                <span className="text-slate-400">Security Standard:</span>
                <span className="font-semibold text-brand-emerald">SOC 2 / GDPR Ready</span>
              </div>
            </div>
          </div>

          {/* Metrics counter - Full width & centered below the grid */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center max-w-5xl mx-auto">
              <div>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white">{site.stats.engineers}</div>
                <div className="mt-1 text-xs sm:text-sm text-slate-400">Senior Engineers</div>
              </div>
              <div>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white">{site.stats.engagementYears}</div>
                <div className="mt-1 text-xs sm:text-sm text-slate-400">Avg Retention</div>
              </div>
              <div>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white">{site.stats.projectsDelivered}</div>
                <div className="mt-1 text-xs sm:text-sm text-slate-400">Enterprise Apps</div>
              </div>
              <div>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white">{site.stats.uptime}</div>
                <div className="mt-1 text-xs sm:text-sm text-slate-400">Target SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⚡ Core Services Showcase Grid */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">
              What We Build
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Enterprise Engineering Services
            </h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-brand-indigo hover:text-brand-purple">
            Explore All Services →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.href} className="glass-card flex flex-col justify-between rounded-3xl p-6">
              <div>
                <span className="inline-flex rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-brand-cyan mb-3">
                  {s.badge || "Engineering Service"}
                </span>
                <h3 className="text-xl font-bold text-white">{s.shortTitle}</h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-400">{s.summary}</p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                <Link href={s.href} className="text-xs font-semibold text-brand-indigo hover:underline">
                  Read Technical Spec →
                </Link>
                <button
                  type="button"
                  onClick={() => openQuote(s.shortTitle)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Consult
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏢 Industry Verticals Section */}
      <section className="border-t border-b border-white/10 bg-dark-950/70 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
              Deep Domain Expertise
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Specialized Industry Verticals
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400">
              We build custom software engineered specifically for complex operational and compliance challenges.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <div key={ind.href} className="glass-card flex flex-col justify-between rounded-2xl p-6">
                <div>
                  <h3 className="text-lg font-bold text-white">{ind.title}</h3>
                  <p className="mt-1 text-xs text-brand-indigo font-medium">{ind.subtitle}</p>
                  <p className="mt-3 text-xs text-slate-400">{ind.summary}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3">
                    {ind.keyFeatures.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={ind.href}
                  className="mt-6 block text-center rounded-xl bg-white/5 py-2 text-xs font-semibold text-white hover:bg-white/10 transition"
                >
                  View Vertical Solutions
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚙️ Technology Stack Matrix */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="glass-card rounded-3xl p-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">
                Battle-Tested Architecture
              </span>
              <h2 className="mt-1 text-2xl font-bold text-white">Modern Engineering Stack</h2>
            </div>
            <span className="text-xs text-slate-400">Clean Code · Microservices · CI/CD</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {techStackList.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono font-medium text-slate-200 transition hover:border-brand-purple hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 🏆 Why Choose BurjSoft */}
      <section className="border-t border-white/10 bg-dark-950/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
                Strategic Advantage
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Why Enterprise Leaders Partner with BurjSoft
              </h2>
              <p className="mt-4 text-sm text-slate-400">
                Rather than short-term project vendors, we operate as an extended engineering core under transparent Miami LLC governance.
              </p>

              <ul className="mt-6 space-y-3">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-emerald/20 text-brand-emerald text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Miami LLC Governance", "U.S. legal framework with transparent contracts and guaranteed 100% IP transfer."],
                ["6+ Year Retention", "Long-term engineering engagements with senior developers who embed into your workflow."],
                ["Agile Sprint Velocity", "2-week sprint cycles with continuous integration and staging environment reviews."],
                ["SOC 2 & GDPR Protocols", "Enterprise-grade data encryption, security audits, and compliance validation."],
              ].map(([t, d]) => (
                <div key={t} className="glass-card rounded-2xl p-5">
                  <h3 className="text-base font-bold text-white">{t}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ❓ FAQs */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="mb-6 text-3xl font-bold text-white">Frequently Asked Questions</h2>
        <FAQ items={homeFaqs} />
      </section>

      {/* 📣 Final Call to Action */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="glass-card relative overflow-hidden rounded-3xl p-10 text-center border border-white/15">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/15 via-brand-indigo/15 to-brand-cyan/15 pointer-events-none" />
          <h2 className="font-sans text-3xl font-extrabold text-white sm:text-4xl">
            Build Your Enterprise Software with BurjSoft
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            Schedule a confidential discovery call with our lead software architects to review your technical requirements and ramp up your engineering team.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => openQuote("Bottom CTA Strategy Call")}
              className="btn-primary"
            >
              Schedule Strategy Call →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
