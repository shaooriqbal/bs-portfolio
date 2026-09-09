import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BeSafe 24-7",
  description: "Glasgow Gas Safe engineers for boiler repair, servicing, installs, plumbing and drainage.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
