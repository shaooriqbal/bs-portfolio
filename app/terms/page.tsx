import { site } from "@/lib/site";

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 text-slate-300 sm:px-6">
      <h1 className="font-sans text-4xl font-bold text-white">Terms of Service</h1>
      <p className="mt-6 leading-relaxed">
        Software engineering services delivered by {site.legalName} (&quot;BurjSoft&quot;) are governed under Master Services Agreements (MSA) and Statements of Work (SOW) executed under U.S. jurisdiction (Miami, Florida).
      </p>
      <p className="mt-4 leading-relaxed">
        100% intellectual property ownership of all custom source code, documentation, and cloud infrastructure scripts transfers to the client upon milestone payment completion.
      </p>
      <p className="mt-4 leading-relaxed">
        For questions regarding client agreements or SLAs, contact{" "}
        <a href={`mailto:${site.email}`} className="text-brand-cyan underline">
          {site.email}
        </a>.
      </p>
    </article>
  );
}
