"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site, whatsappUrl } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  // trava a rolagem e fecha com Esc enquanto o menu está aberto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((o) => !o)}
        className="relative z-[110] grid h-11 w-11 place-items-center rounded-full border border-washi/30"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
          <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 8h16M4 16h16"} />
        </svg>
      </button>

      {open && (
        <div id="menu-mobile" className="fixed inset-0 z-[105] flex flex-col justify-center gap-6 bg-sumi px-8">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl font-extrabold tracking-tight"
            >
              {item.label}
            </Link>
          ))}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-4 text-lg text-washi/80 underline">
            Falar no WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}