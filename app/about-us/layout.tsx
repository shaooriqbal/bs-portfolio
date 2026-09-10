import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Burjsoft",
  description: "Miami-registered custom software engineering for Fintech, Logistics, Real Estate & Field Operations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
