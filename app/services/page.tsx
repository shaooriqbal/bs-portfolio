"use client";

import Link from "next/link";
import { site, homeFaqs } from "@/lib/site";
import { services } from "@/lib/services";
import { FAQ } from "@/components/FAQ";
import { useQuote } from "@/components/QuoteDrawer";

export default function ServicesPage() {
  const { openQuote } = useQuote();

  return (
    <div className="bg-dark-900 text-slate-100 min-h-screen">
      <section className="relative overflow-hidden border-b border-white/10 bg-dark-950 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-purple">
            BurjSoft Software Engineering Capabilities
          </span>
          <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Enterprise Custom Software &amp; Cloud Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            From greenfield SaaS engineering to cloud infrastructure modernizations and dedicated developer pods, explore how BurjSoft powers mission-critical tech.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => openQuote("All Services Review")}
              className="btn-primary"
            >
              Schedule Architecture Consultation →
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.href} className="glass-card flex flex-col justify-between rounded-3xl p-8">
              <div>
                <span className="inline-flex rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-brand-cyan mb-4">
                  {s.badge || "Engineering Service"}
                </span>
                <h2 className="text-2xl font-bold text-white">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.summary}</p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Features
                  </span>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {s.includes.slice(0, 4).map((inc) => (
                      <li key={inc} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
                        <span className="truncate">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                <Link href={s.href} className="btn-secondary text-xs">
                  View Technical Spec →
                </Link>
                <button
                  type="button"
                  onClick={() => openQuote(s.shortTitle)}
                  className="text-xs font-semibold text-brand-indigo hover:text-white"
                >
                  Consult Architect
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <h2 className="mb-6 text-2xl font-bold text-white">Engineering FAQs</h2>
        <FAQ items={homeFaqs} />
      </section>
    </div>
  );
}
