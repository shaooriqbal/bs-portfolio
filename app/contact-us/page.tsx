"use client";

import { site, whatsappUrl } from "@/lib/site";
import { QuoteForm } from "@/components/QuoteForm";

export default function ContactPage() {
  return (
    <div className="bg-dark-900 text-slate-100 min-h-screen">
      <section className="relative overflow-hidden border-b border-white/10 bg-dark-950 py-20 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-cyan">
            Connect with BurjSoft
          </span>
          <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Start Your Software Architecture Consultation
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            Have a custom software project or need a dedicated developer pod? Fill out the project brief below or reach out directly to our engineering architects.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[0.8fr_1.2fr] sm:px-6">
        <aside className="space-y-6">
          <div className="glass-card rounded-3xl p-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-purple">Direct Contact</h2>
            <a href={`mailto:${site.email}`} className="mt-2 block text-base font-bold text-white hover:text-brand-cyan">
              {site.email}
            </a>
            <p className="mt-1 text-xs text-slate-400">Response within 24 business hours</p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-emerald">Corporate Headquarters</h2>
            <p className="mt-2 text-sm font-semibold text-white">{site.legalName}</p>
            <p className="mt-1 text-xs text-slate-400">{site.address}</p>
            <span className="mt-3 inline-block rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-mono text-slate-300">
              Registered U.S. Jurisdiction
            </span>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Instant Messaging</h2>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-emerald hover:underline"
            >
              <span>Connect on WhatsApp</span> →
            </a>
          </div>
        </aside>

        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/15">
          <h2 className="mb-6 font-sans text-2xl font-bold text-white">Project Strategy Brief</h2>
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
