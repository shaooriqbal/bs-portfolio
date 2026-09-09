"use client";

import { useState } from "react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-dark-800/80 backdrop-blur-xl">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/5"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-sans text-sm font-semibold text-white sm:text-base">
                {item.q}
              </span>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="px-6 pb-5 text-xs sm:text-sm leading-relaxed text-slate-400 animate-fadeIn">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
