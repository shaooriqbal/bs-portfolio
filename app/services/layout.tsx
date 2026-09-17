import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fintech, CRMS and custom software development services",
  description:
    "Custom software development services for fintech, crms and custom software development. We help startups and enterprises build scalable and secure software solutions.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
