"use client";

import { useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { flavors } from "@/config/flavors";
// @ts-expect-error CSS side-effect imports are handled by the app bundler.
import "./flavors-carousel.css";

const N = flavors.length;
const wrap = (i: number) => ((i % N) + N) % N;

// distância assinada, circular, de um sabor até o ativo
function dist(i: number, active: number) {
  let d = i - active;
  if (d > N / 2) d -= N;
  if (d < -N / 2) d += N;
  return d;
}

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={dir === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export function FlavorsCarousel() {
  const [active, setActive] = useState(0);
  const start = useRef<number | null>(null);
  const moved = useRef(false);

  const go = (delta: number) => setActive((a) => wrap(a + delta));
  const current = flavors[active]!;

  const onPointerDown = (e: PointerEvent) => {
    start.current = e.clientX;
    moved.current = false;
  };
  const onPointerMove = (e: PointerEvent) => {
    if (start.current !== null && Math.abs(e.clientX - start.current) > 8) moved.current = true;
  };
  const onPointerUp = (e: PointerEvent) => {
    if (start.current === null) return;
    const dx = e.clientX - start.current;
    start.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  return (
    <section className="fl-section" aria-roledescription="carrossel" aria-label="Sabores de temaki">
      <div className="fl-head">
        <h2 className="fl-title" aria-live="polite">
          <span className="fl-pre">Eu me rendo ao</span>
          <span key={current.slug} className="fl-name">
            {current.name}
          </span>
        </h2>
        <p key={`${current.slug}-d`} className="fl-desc">
          {current.description}
        </p>
      </div>

      <div
        className="fl-stage"
        tabIndex={0}
        aria-label="Use as setas do teclado para trocar de sabor"
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (start.current = null)}
      >
        {flavors.map((f, i) => {
          const d = dist(i, active);
          const abs = Math.abs(d);
          const isActive = d === 0;
          return (
            <div
              key={f.slug}
              className="fl-item"
              data-abs={abs}
              data-active={isActive}
              style={{ "--d": d, "--abs": Math.min(abs, 3) } as CSSProperties}
            >
              <button
                type="button"
                className="fl-btn"
                aria-label={isActive ? `${f.name}, selecionado` : `Ver ${f.name}`}
                aria-current={isActive}
                tabIndex={isActive ? -1 : 0}
                onClick={() => {
                  if (!moved.current) setActive(i);
                }}
              >
                <Image
                  src={f.src}
                  alt={isActive ? `Temaki ${f.name}` : ""}
                  width={f.w}
                  height={f.h}
                  priority={i === 0}
                  sizes="(max-width: 640px) 40vw, 24vw"
                  className="fl-img"
                  draggable={false}
                />
              </button>
            </div>
          );
        })}

        {/* ingredientes do sabor flutuando (entram quando houver as imagens) */}
        {current.floaters?.map((g, k) => (
          <span
            key={`${current.slug}-${k}`}
            className="fl-float"
            style={{ left: `${g.x}%`, top: `${g.y}%`, "--fs": g.size, "--fr": `${g.rot}deg` } as CSSProperties}
          >
            <Image src={g.src} alt="" aria-hidden width={g.w} height={g.h} sizes="20vw" />
          </span>
        ))}
      </div>

      <div className="fl-controls">
        <button type="button" className="fl-arrow" aria-label="Sabor anterior" onClick={() => go(-1)}>
          <Arrow dir="prev" />
        </button>
        <div className="fl-dots">
          {flavors.map((f, i) => (
            <button
              key={f.slug}
              type="button"
              className="fl-dot"
              aria-label={f.name}
              aria-current={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
        <button type="button" className="fl-arrow" aria-label="Próximo sabor" onClick={() => go(1)}>
          <Arrow dir="next" />
        </button>
      </div>

      <div className="fl-cta">
        <Link
          href="/cardapio"
          className="inline-block rounded-full bg-shu px-8 py-4 font-semibold text-white transition-transform duration-150 ease-out-strong active:scale-[0.97]"
        >
          Ver cardápio completo
        </Link>
      </div>
    </section>
  );
}