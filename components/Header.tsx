"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { useQuote } from "./QuoteDrawer";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const { openQuote } = useQuote();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-dark-900/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple via-brand-indigo to-brand-cyan p-0.5 shadow-glow transition group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-dark-900">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-white transition group-hover:text-brand-cyan"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <div>
            <span className="block font-sans text-xlg font-bold tracking-tight text-white">
              Burj<span className="text-gradient-purple">Soft</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Enterprise Software
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            if (item.href === "/services") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                      pathname.startsWith("/services")
                        ? "text-white font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    Services
                    <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full pt-2 w-80">
                      <div className="rounded-2xl border border-white/10 bg-dark-800/95 p-2 shadow-2xl backdrop-blur-xl">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition"
                          >
                            {s.shortTitle}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (item.href === "/industries") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  <Link
                    href="/industries"
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                      pathname.startsWith("/industries")
                        ? "text-white font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    Industries
                    <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {industriesOpen && (
                    <div className="absolute left-0 top-full pt-2 w-72">
                      <div className="rounded-2xl border border-white/10 bg-dark-800/95 p-2 shadow-2xl backdrop-blur-xl">
                        {industries.map((ind) => (
                          <Link
                            key={ind.href}
                            href={ind.href}
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition"
                          >
                            {ind.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  pathname === item.href
                    ? "text-white font-semibold bg-white/5"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => openQuote("Enterprise Architecture Call")}
            className="btn-primary text-xs tracking-wide"
          >
            Schedule Strategy Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-xl border border-white/10 p-2 text-slate-300 hover:bg-white/5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-white/10 bg-dark-900/95 px-4 py-6 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="my-2 border-t border-white/10 pt-3">
              <span className="block px-3 pb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Services
              </span>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block rounded-lg px-3 py-1.5 text-sm text-slate-400 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
            <button
              onClick={() => {
                setMobileOpen(false);
                openQuote("Mobile Menu Consultation");
              }}
              className="btn-primary w-full justify-center"
            >
              Schedule Strategy Call
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
