import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

const points = [
  { title: "Nori crocante", text: "Montado na hora, para não amolecer." },
  { title: "Arroz morno", text: "Temperado e na temperatura certa." },
  { title: "Recheio fresco", text: "Cortado no momento do pedido." },
];

export function AboutTeaser() {
  return (
    <section className="bg-sumi py-24 md:py-32" aria-labelledby="casa-titulo">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <h2 id="casa-titulo" className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[0.98]">
            O temaki é montado na sua frente.
          </h2>
          <div>
            <p className="max-w-[46ch] text-[clamp(1.0625rem,1rem+0.3vw,1.25rem)] text-washi/80">
              No Hayumi, cada temaki sai na hora para você comer com a mão, com o nori ainda crocante.
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              {points.map((p) => (
                <div key={p.title}>
                  <dt className="font-display text-xl font-extrabold text-shu">{p.title}</dt>
                  <dd className="mt-1 text-washi/70">{p.text}</dd>
                </div>
              ))}
            </dl>
            <ButtonLink href="/sobre" variant="outline" className="mt-10">
              Conhecer a casa
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}