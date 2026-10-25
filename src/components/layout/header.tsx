import Link from "next/link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { site } from "@/config/site";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-5 sm:px-8">
      <Link href="/" className="font-display text-3xl font-extrabold tracking-tight">
        {site.name.toLowerCase()}
      </Link>
      <nav aria-label="Principal" className="flex items-center gap-7 text-sm">
        {site.nav.map((item) => (
          <Link key={item.href} href={item.href} className="hidden md:inline">
            {item.label}
          </Link>
        ))}
        <Link
          href="/reservas"
          className="rounded-full bg-shu px-6 py-3 font-semibold text-white transition-transform duration-150 ease-out-strong active:scale-[0.97]"
        >
          reservar
        </Link>
        <MobileNav />
      </nav>
    </header>
  );
}