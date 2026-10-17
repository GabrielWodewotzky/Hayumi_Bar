"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="px-4 py-24 sm:px-8">
      <h1 className="font-display text-6xl tracking-tighter">algo deu errado</h1>
      <button onClick={reset} className="mt-6 rounded-full bg-shu px-6 py-3 font-semibold text-white">
        tentar de novo
      </button>
    </section>
  );
}
