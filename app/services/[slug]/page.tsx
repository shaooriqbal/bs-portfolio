import { ServicePage } from "@/components/ServicePage";
import { getService, services } from "@/lib/services";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
