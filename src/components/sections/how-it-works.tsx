import { Container } from "@/components/ui/container";

const steps = [
  { title: "Nori", text: "Tostado e aberto na hora, ainda crocante." },
  { title: "Arroz", text: "Espalhado morno sobre a folha." },
  { title: "Recheio", text: "Fatiado e colocado na ordem do sabor escolhido." },
  { title: "Na sua mão", text: "O cone é fechado e entregue para você comer na hora." },
];

export function HowItWorks() {
  return (
    <section className="bg-surface py-24 md:py-32" aria-labelledby="como-titulo">
      <Container>
        <h2 id="como-titulo" className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[0.98]">
          Como o temaki chega até você.
        </h2>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-washi/20 pt-6">
              <span className="font-display text-6xl font-extrabold text-shu">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-2xl font-extrabold">{s.title}</h3>
              <p className="mt-2 text-washi/75">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}