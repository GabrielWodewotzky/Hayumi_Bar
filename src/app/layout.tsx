import type { Metadata, Viewport } from "next";
import { Figtree, Shippori_Mincho_B1 } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { IntroDoors } from "@/components/layout/intro-doors";
import { site } from "@/config/site";
import "@/styles/globals.css";
import "@/styles/intro.css";

const mincho = Shippori_Mincho_B1({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-mincho" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-figtree" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — sushi bar`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, locale: "pt_BR", type: "website" },
};

export const viewport: Viewport = { themeColor: "#0d0b0a", viewportFit: "cover" };

// toca a abertura em todo carregamento completo da home (F5 incluso), exceto com movimento reduzido
const introScript = `try{if(location.pathname==="/"&&!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.intro="1"}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${mincho.variable} ${figtree.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        <IntroDoors />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}