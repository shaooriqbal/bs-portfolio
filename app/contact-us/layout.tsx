import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BeSafe 24-7",
  description: "Call 0141 374 0545 or send a quote request. Gas Safe engineers across Greater Glasgow.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
