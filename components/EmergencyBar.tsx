"use client";

import { useQuote } from "./QuoteDrawer";

export function EmergencyBar() {
  const { openQuote } = useQuote();

  return (
    <div className="relative z-40 border-b border-white/10 bg-dark-900/90 text-xs font-medium text-slate-300 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <div className="flex items-center gap-2 truncate">
          <span className="inline-flex items-center rounded-full bg-brand-indigo/20 px-2 py-0.5 text-[10px] font-semibold text-brand-indigo ring-1 ring-inset ring-brand-indigo/30">
            NEW
          </span>
          <span className="truncate text-slate-300">
            BurjSoft scales to 100+ global engineers across Fintech, Logistics, PropTech & Industrial software.
          </span>
        </div>
        <button
          onClick={() => openQuote("Software Architecture Review")}
          className="hidden shrink-0 items-center gap-1 text-xs font-semibold text-slate-200 transition hover:text-white sm:flex"
        >
          Book Architecture Review <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
