const LAMPS = [
  { x: 8, drop: 150, mobile: true },
  { x: 22, drop: 250, mobile: false },
  { x: 78, drop: 210, mobile: false },
  { x: 92, drop: 270, mobile: true },
];

const PANELS = [0, 1, 2, 3];

// fundo que simula um balcão japonês: madeira, noren azul-marinho, bambu e luminárias
export function CounterScene() {
  return (
    <div className="fl-wall" aria-hidden>
      <div className="fl-wood" />
      <div className="fl-beam" />
      <div className="fl-rod" />

      <div className="fl-noren">
        {PANELS.map((p) => (
          <div key={p} className="fl-noren-panel">
            <span className="fl-noren-tab" />
          </div>
        ))}
        <div className="fl-noren-stars" />
      </div>

      {LAMPS.map((l) => (
        <span
          key={l.x}
          className={`fl-lamp${l.mobile ? "" : " fl-lamp-desktop"}`}
          style={{ left: `${l.x}%`, "--drop": `${l.drop}px` } as React.CSSProperties}
        >
          <svg viewBox="0 0 60 64" width="60" height="64">
            <path d="M22 4h16l3 10c9 5 16 14 18 34H1c2-20 9-29 18-34z" fill="rgb(255 236 200 / 0.26)" stroke="rgb(255 236 200 / 0.6)" strokeWidth="1.5" />
            <circle cx="30" cy="40" r="9" fill="#ffe6b0" />
          </svg>
        </span>
      ))}
    </div>
  );
}