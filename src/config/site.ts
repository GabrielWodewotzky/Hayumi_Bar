export const site = {
  name: "Hayumi",
  description: "Temaki bar em São Paulo. Montado na sua frente, um de cada vez.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  nav: [
    { label: "cardápio", href: "/cardapio" },
    { label: "a casa", href: "/sobre" },
    { label: "reservas", href: "/reservas" },
  ],
} as const;