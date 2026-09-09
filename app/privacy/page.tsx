import { site } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 text-slate-300 sm:px-6">
      <h1 className="font-sans text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mt-6 leading-relaxed">
        {site.legalName} (&quot;we&quot;, &quot;BurjSoft&quot;) respects your privacy and is committed to protecting confidential client data. Information collected on this site (name, work email, phone, company name, project brief) is strictly used to process software strategy inquiries and schedule technical architecture reviews.
      </p>
      <p className="mt-4 leading-relaxed">
        All client intellectual property, code snippets, and architectural blueprints shared with BurjSoft remain 100% confidential under U.S. jurisdiction. We do not sell or lease client contact information.
      </p>
      <p className="mt-4 leading-relaxed">
        To request data deletion or privacy inquiries, contact our compliance team at{" "}
        <a href={`mailto:${site.email}`} className="text-brand-cyan underline">
          {site.email}
        </a>.
      </p>
      <p className="mt-4 text-xs text-slate-500">Corporate HQ: {site.address}</p>
    </article>
  );
}
