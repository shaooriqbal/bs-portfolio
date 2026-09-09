"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { QuoteForm } from "./QuoteForm";

type QuoteContextValue = {
  openQuote: (jobType?: string) => void;
};

const QuoteContext = createContext<QuoteContextValue>({ openQuote: () => {} });

export function useQuote() {
  return useContext(QuoteContext);
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [jobType, setJobType] = useState("Custom Enterprise Platform");

  const value = useMemo(
    () => ({
      openQuote: (type?: string) => {
        if (type) setJobType(type);
        setOpen(true);
      },
    }),
    []
  );

  return (
    <QuoteContext.Provider value={value}>
      {children}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-6 animate-fadeIn">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-dark-900 p-6 shadow-2xl sm:rounded-3xl sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="inline-flex items-center rounded-full bg-brand-purple/20 px-2.5 py-0.5 text-[11px] font-semibold text-brand-purple ring-1 ring-inset ring-brand-purple/30">
                  Discovery Call & Architecture Review
                </span>
                <h2 className="mt-2 font-sans text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Schedule Software Consultation
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 hover:bg-white/10 hover:text-white"
              >
                Close ✕
              </button>
            </div>
            <QuoteForm defaultJobType={jobType} onDone={() => setOpen(false)} />
          </div>
        </div>
      )}
    </QuoteContext.Provider>
  );
}
