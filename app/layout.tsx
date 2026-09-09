import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteProvider } from "@/components/QuoteDrawer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { EmergencyBar } from "@/components/EmergencyBar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "BurjSoft | Custom Software Engineering for Enterprise",
    template: "%s | BurjSoft Software Engineering",
  },
  description: site.description,
  metadataBase: new URL("https://burjsoft.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#08090a] font-sans text-slate-100 antialiased selection:bg-brand-indigo/40 selection:text-white">
        <QuoteProvider>
          <EmergencyBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </QuoteProvider>
      </body>
    </html>
  );
}
