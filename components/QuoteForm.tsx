"use client";

import { FormEvent, useState } from "react";
import { projectTypes, site, whatsappUrl } from "@/lib/site";

type Props = {
  defaultJobType?: string;
  onDone?: () => void;
};

export function QuoteForm({ defaultJobType = "Custom Enterprise Platform", onDone }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");
  const [whatsapp, setWhatsapp] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      jobType: String(data.get("jobType") || ""),
      company: String(data.get("company") || ""),
      budget: String(data.get("budget") || ""),
      stack: String(data.get("stack") || ""),
      symptoms: String(data.get("symptoms") || ""),
      photoName: (data.get("photo") as File | null)?.name || "",
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      const json = await res.json();
      setWhatsapp(json.whatsapp as string);
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-white/10 bg-dark-800 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-emerald/20 text-brand-emerald ring-1 ring-brand-emerald/30 mb-4">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-sans text-2xl font-bold text-white">Strategy Request Received</h3>
        <p className="mt-2 text-sm text-slate-400">
          Our technical architect will review your project brief and reach out within 24 hours. You can also connect directly on WhatsApp now.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={whatsapp || whatsappUrl()}
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Connect via WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="btn-secondary">
            Email Architect
          </a>
        </div>
        {onDone && (
          <button
            type="button"
            className="mt-6 text-xs text-slate-500 hover:text-slate-300 underline"
            onClick={onDone}
          >
            Close Window
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Full Name *
          <input
            required
            name="name"
            placeholder="Jane Doe"
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm font-normal text-white placeholder-slate-500 focus:border-brand-indigo focus:outline-none"
          />
        </label>
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Work Email *
          <input
            required
            name="email"
            type="email"
            placeholder="jane@company.com"
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm font-normal text-white placeholder-slate-500 focus:border-brand-indigo focus:outline-none"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Phone / WhatsApp *
          <input
            required
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm font-normal text-white placeholder-slate-500 focus:border-brand-indigo focus:outline-none"
          />
        </label>
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Company Name
          <input
            name="company"
            placeholder="Acme Corp"
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm font-normal text-white placeholder-slate-500 focus:border-brand-indigo focus:outline-none"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Project Category
          <select
            name="jobType"
            defaultValue={defaultJobType}
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-dark-800 px-3.5 py-2.5 text-sm font-normal text-white focus:border-brand-indigo focus:outline-none"
          >
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
          Estimated Budget Range
          <select
            name="budget"
            defaultValue="$25k - $50k"
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-dark-800 px-3.5 py-2.5 text-sm font-normal text-white focus:border-brand-indigo focus:outline-none"
          >
            <option>$10k - $25k</option>
            <option>$25k - $50k</option>
            <option>$50k - $100k</option>
            <option>$100k+</option>
            <option>Dedicated Engineer Pod</option>
          </select>
        </label>
      </div>

      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
        Project Scope & Architectural Requirements
        <textarea
          name="symptoms"
          rows={4}
          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm font-normal text-white placeholder-slate-500 focus:border-brand-indigo focus:outline-none"
          placeholder="Describe your product requirements, current stack challenges, target timeline, or team scaling goals..."
        />
      </label>

      {status === "error" && (
        <p className="text-xs text-rose-400">
          An error occurred. Please verify required fields and resubmit.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full justify-center py-3 text-sm"
      >
        {status === "submitting" ? "Processing Inquiry..." : "Submit Strategy Brief →"}
      </button>

      <p className="text-[11px] text-slate-500 text-center">
        100% Confidential. Secured under U.S. Jurisdiction (BurjSoft LLC).
      </p>
    </form>
  );
}
