"use client";

import { useQuote } from "./QuoteDrawer";

export function WhatsAppButton() {
  const { openQuote } = useQuote();

  return (
    <button
      onClick={() => openQuote("Floating Widget Consultation")}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-dark-800/90 px-4 py-2.5 text-xs font-semibold text-slate-200 shadow-2xl backdrop-blur-xl transition hover:border-brand-indigo hover:text-white hover:shadow-glow"
      aria-label="Schedule Discovery Call"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-emerald opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-emerald"></span>
      </span>
      <span>Talk to Architect</span>
    </button>
  );
}
