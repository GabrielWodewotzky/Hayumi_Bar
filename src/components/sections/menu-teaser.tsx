import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { featured } from "@/config/menu";

export function MenuTeaser() {
  return (
    <section className="bg-washi py-24 text-sumi md:py-32" aria-labelledby="cardapio-titulo">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="cardapio-titulo" className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[0.98]">
            Além do temaki.
          </h2>
          <ButtonLink href="/cardapio" variant="dark">
            Ver cardápio completo
          </ButtonLink>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {featured.map((d) => (
            <li key={d.name} className="group rounded-3xl bg-[#ebe4d6] p-5 md:p-6">
              <div className="flex h-40 items-center justify-center md:h-56">
                <Image
                  src={d.src}
                  alt={d.name}
                  width={d.w}
                  height={d.h}
                  sizes="(max-width: 768px) 40vw, 24vw"
                  className="max-h-full w-auto max-w-full object-contain drop-shadow-[0_16px_18px_rgb(40_24_12/0.25)] transition-transform duration-300 ease-out-strong group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-display text-2xl font-extrabold">{d.name}</h3>
              <p className="mt-1 text-[#4a413a]">{d.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}