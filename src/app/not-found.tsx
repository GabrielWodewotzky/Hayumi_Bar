import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-24 sm:px-8">
      <h1 className="font-display text-6xl tracking-tighter">página não encontrada</h1>
      <Link href="/" className="mt-6 inline-block underline">voltar para o início</Link>
    </section>
  );
}
