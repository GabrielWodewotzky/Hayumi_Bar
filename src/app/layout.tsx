import type { Metadata, Viewport } from "next";
import { Figtree, League_Spartan } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/config/site";
import "@/styles/globals.css";

const spartan = League_Spartan({ subsets: ["latin"], weight: "700", variable: "--font-spartan" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-figtree" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — izakaya e omakase`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, locale: "pt_BR", type: "website" },
};

export const viewport: Viewport = { themeColor: "#0e0c0b", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spartan.variable} ${figtree.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
