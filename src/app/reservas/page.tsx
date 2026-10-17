import type { Metadata } from "next";

export const metadata: Metadata = { title: "Reservas" };

export default function Page() {
  return (
    <section className="px-4 py-24 sm:px-8">
      <h1 className="font-display text-6xl tracking-tighter">Reservas</h1>
    </section>
  );
}
