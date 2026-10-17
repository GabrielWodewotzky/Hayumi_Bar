export const site = {
  name: "Kamado",
  description: "Izakaya e omakase em São Paulo. Fogo, arroz e peixe.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  nav: [
    { label: "cardápio", href: "/cardapio" },
    { label: "a casa", href: "/sobre" },
    { label: "reservas", href: "/reservas" },
  ],
} as const;
