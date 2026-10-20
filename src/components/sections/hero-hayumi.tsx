import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { dishes, temaki } from "@/config/hero-dishes";

// permite passar variáveis CSS no atributo style
const vars = (o: Record<string, string | number>) => o as CSSProperties;

function Letters({ text, start }: { text: string; start: number }) {
  return (
    <span className="hero-word" aria-hidden>
      {text.split("").map((c, i) => (
        <span key={i} style={vars({ "--i": start + i })}>
          {c}
        </span>
      ))}
    </span>
  );
}

export function HeroHayumi() {
  return (
    <section className="hero-root" aria-label="Hayumi">
      <div className="hero-waves" aria-hidden />

      {/* HAY [temaki] UMI + subtítulo */}
      <div className="hero-stack">
        <h1 className="hero-lock font-display" aria-label="Hayumi">
          <Letters text="HAY" start={0} />
          <span className="hero-tem">
            <span className="hero-tem-in">
              <Image
                src={temaki.src}
                alt="Temaki de salmão, abacate e pepino"
                width={temaki.w}
                height={temaki.h}
                priority
                sizes="(max-width: 768px) 40vw, 30vw"
                className="hero-tem-img bob-t"
                style={vars({ "--r0": "8deg" })}
              />
            </span>
          </span>
          <Letters text="UMI" start={3} />
        </h1>
        <p className="hero-sub font-display">
          <span className="hanko" aria-hidden>
            寿司
          </span>
          Sushi Bar
        </p>
      </div>

      {/* pratos flutuando: aumentam ao passar o mouse */}
      {dishes.map((d, k) => (
        <div
          key={d.id}
          className="dish"
          style={vars({ "--dx": `${d.x}%`, "--dy": `${d.y}%`, "--mx": `${d.mx}%`, "--my": `${d.my}%`, "--k": k, zIndex: d.z })}
        >
          <span className="dish-in">
            <span className="dish-scale">
              <Image
                src={d.src}
                alt=""
                aria-hidden
                width={d.w}
                height={d.h}
                sizes="(max-width: 768px) 24vw, 20vw"
                className="dish-img bob"
                style={vars({
                  "--sz": d.size,
                  "--msz": d.msize,
                  "--r0": `${d.rot}deg`,
                  "--t": `${d.dur}s`,
                  "--dl": `${d.delay}s`,
                  "--blur": `${d.blur}px`,
                })}
              />
            </span>
          </span>
        </div>
      ))}

      {/* texto e botão */}
      <div className="absolute bottom-[clamp(20px,5vh,56px)] left-4 right-4 z-50 sm:left-8 md:right-auto md:max-w-[24ch]">
        <p className="mb-5 text-[clamp(1.125rem,1rem+0.6vw,1.5rem)] leading-snug">Do balcão direto para a sua mão.</p>
        <Link
          href="/reservas"
          className="inline-block rounded-full bg-shu px-8 py-4 font-semibold text-white transition-transform duration-150 ease-out-strong active:scale-[0.97]"
        >
          Reservar um lugar
        </Link>
      </div>
    </section>
  );
}