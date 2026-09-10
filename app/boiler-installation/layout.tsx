import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Company - BurjSoft",
  description: "Leading software development company in Miami, FL. Specializing in custom enterprise software, mobile apps, and cloud solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
