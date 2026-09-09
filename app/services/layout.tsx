import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heating, Plumbing & Boiler Services Glasgow",
  description:
    "Emergency boiler repairs, annual servicing, CP12, new installs, plumbing, gas and drainage from Gas Safe engineers across Greater Glasgow.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
