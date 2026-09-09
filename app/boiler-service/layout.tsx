import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boiler Service Glasgow & CP12 Certificates",
  description:
    "Annual boiler servicing and landlord CP12 certificates in Glasgow. Gas Safe engineers, digital reports and reminders.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
