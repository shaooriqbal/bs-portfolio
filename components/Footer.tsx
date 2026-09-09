import Link from "next/link";
import { site, techStackList } from "@/lib/site";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-950 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Company Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-purple to-brand-indigo">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-sans text-xl font-bold tracking-tight text-white">
              Burj<span className="text-gradient-purple">Soft</span>
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400">
            {site.description}
          </p>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs">
            <span className="block font-semibold text-slate-200">Registered US Entity</span>
            <span className="text-slate-400">{site.legalName} — Miami, FL, USA</span>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">Engineering Services</h3>
          <ul className="mt-4 space-y-2 text-xs">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="transition hover:text-white">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries Column */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">Industry Verticals</h3>
          <ul className="mt-4 space-y-2 text-xs">
            {industries.map((ind) => (
              <li key={ind.href}>
                <Link href={ind.href} className="transition hover:text-white">
                  {ind.title}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/about-us" className="text-slate-400 hover:text-white">
                About BurjSoft
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-slate-400 hover:text-white">
                Contact & Inquiries
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Tech Stack */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">Technology & Contact</h3>
          <p className="mt-4 text-xs text-slate-400">
            Inquiries: <a href={`mailto:${site.email}`} className="text-brand-cyan hover:underline">{site.email}</a>
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Location: {site.address}
          </p>
          <div className="mt-4">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Primary Stack
            </span>
            <div className="flex flex-wrap gap-1">
              {techStackList.slice(0, 7).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-dark-900 px-4 py-6 text-center text-xs text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {site.legalName}. All Rights Reserved.</p>
          <div className="flex gap-4 text-slate-400">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
