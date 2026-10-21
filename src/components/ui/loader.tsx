import type { CSSProperties } from "react";
import "./loader.css";

type LoaderProps = {
  size?: number; // em px
  label?: string; // texto para leitores de tela
};

export function Loader({ size = 72, label = "Carregando" }: LoaderProps) {
  return (
    <span role="status" className="loader" style={{ "--size": `${size}px` } as CSSProperties}>
      <svg viewBox="0 0 100 100" aria-hidden className="loader-ring">
        <circle className="loader-arc a" cx="50" cy="50" r="42" />
        <circle className="loader-arc b" cx="50" cy="50" r="42" />
      </svg>
      {/* abaixo de 56px o kanji ficaria pequeno demais: só o selo liso */}
      <span aria-hidden className="loader-seal">
        {size >= 56 ? "寿司" : ""}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
}