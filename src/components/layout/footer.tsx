import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="overflow-hidden px-4 pb-6 sm:px-8">
      <p aria-hidden className="font-display text-[26vw] leading-[0.8] text-shu">
        {site.name.toLowerCase()}
      </p>
      <p className="pt-3 text-sm text-washi/70">© {new Date().getFullYear()} {site.name}.</p>
    </footer>
  );
}
