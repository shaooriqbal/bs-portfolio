import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boiler Installation Glasgow | Combi & System",
  description:
    "A-rated combi and system boiler installation in Glasgow. Free survey, fixed quote, warranty registration.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
