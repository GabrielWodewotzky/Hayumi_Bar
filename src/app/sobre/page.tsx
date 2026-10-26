import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "A casa",
  description: "Conheça o Hayumi, sushi bar em São Paulo onde o temaki é montado na hora.",
};

const principles = [
  { title: "Feito na hora", text: "Nada fica esperando no balcão: o nori é aberto quando o pedido chega." },
  { title: "Ingrediente em primeiro lugar", text: "Peixes e legumes frescos, cortados no momento." },
  { title: "Para comer com a mão", text: "O cone foi pensado para ser segurado e comido sem pressa, mas sem demora." },
];

export default function SobrePage() {
  return (
    <div className="bg-sumi py-16 md:py-24">
      <Container>
        <h1 className="font-display text-[clamp(2.75rem,8vw,6rem)] font-extrabold leading-[0.95]">A casa</h1>

        {/* TODO: trocar pelo texto real da história do Hayumi */}
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <p className="max-w-[52ch] text-[clamp(1.0625rem,1rem+0.3vw,1.25rem)] text-washi/80">
            O Hayumi é um sushi bar em São Paulo com uma ideia simples: servir o temaki no ponto certo, com o nori crocante e o
            recheio fresco, montado na hora.
          </p>
          <p className="max-w-[52ch] text-[clamp(1.0625rem,1rem+0.3vw,1.25rem)] text-washi/80">
            Além dos temakis, o cardápio reúne nigiris, rolls e pratos quentes como yakitori, gyoza e tempurá.
          </p>
        </div>

        <ul className="mt-16 grid gap-10 md:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title} className="border-t border-washi/20 pt-6">
              <h2 className="font-display text-2xl font-extrabold text-shu">{p.title}</h2>
              <p className="mt-2 text-washi/75">{p.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-wrap gap-4">
          <ButtonLink href="/reservas">Reservar uma mesa</ButtonLink>
          <ButtonLink href="/cardapio" variant="outline">
            Ver o cardápio
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}