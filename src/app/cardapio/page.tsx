import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { menu } from "@/config/menu";

export const metadata: Metadata = {
  title: "Cardápio",
  description: "Temakis, sushis, rolls e pratos quentes do Hayumi.",
};

const brl = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function CardapioPage() {
  return (
    <div className="bg-sumi py-16 md:py-24">
      <Container>
        <h1 className="font-display text-[clamp(2.75rem,8vw,6rem)] font-extrabold leading-[0.95]">Cardápio</h1>

        <nav aria-label="Categorias" className="mt-8 flex flex-wrap gap-3">
          {menu.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="rounded-full border border-washi/30 px-5 py-2">
              {c.title}
            </a>
          ))}
        </nav>

        <div className="mt-16 space-y-20">
          {menu.map((cat) => (
            <section key={cat.id} id={cat.id} aria-labelledby={`${cat.id}-titulo`} className="scroll-mt-8">
              <h2 id={`${cat.id}-titulo`} className="font-display text-4xl font-extrabold text-shu">
                {cat.title}
              </h2>
              {cat.intro && <p className="mt-2 max-w-[52ch] text-washi/75">{cat.intro}</p>}
              <ul className="mt-8 grid gap-x-12 md:grid-cols-2">
                {cat.items.map((item) => (
                  <li key={item.name} className="border-b border-washi/15 py-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl font-extrabold">{item.name}</h3>
                      {item.price !== undefined && <span className="font-semibold">{brl(item.price)}</span>}
                    </div>
                    {item.description && <p className="mt-1 text-washi/70">{item.description}</p>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}