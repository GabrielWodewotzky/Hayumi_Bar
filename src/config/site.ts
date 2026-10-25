export type OpeningHours = { days: string; time: string };

export const site = {
  name: "Hayumi",
  tagline: "Sushi Bar",
  description: "Sushi bar em São Paulo: temakis montados na hora, nigiris, yakitori e muito mais.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  // TODO: substituir pelos dados reais do restaurante antes de publicar
  contact: {
    phone: "(11) 90000-0000",
    whatsapp: "5511900000000", // só números, com 55 + DDD
    email: "contato@hayumi.com.br",
  },
  address: {
    street: "Rua Exemplo, 123",
    district: "Bairro",
    city: "São Paulo",
    state: "SP",
    zip: "00000-000",
  },
  hours: [
    { days: "Terça a quinta", time: "18h às 23h" },
    { days: "Sexta e sábado", time: "18h à 0h" },
    { days: "Domingo", time: "17h às 22h" },
  ] satisfies OpeningHours[],
  social: {
    instagram: "https://instagram.com/hayumi",
  },

  nav: [
    { label: "cardápio", href: "/cardapio" },
    { label: "a casa", href: "/sobre" },
    { label: "reservas", href: "/reservas" },
  ],
};

export const addressLine = `${site.address.street} · ${site.address.district}, ${site.address.city} - ${site.address.state}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`;

export const whatsappUrl = (text = "Olá! Gostaria de fazer uma reserva no Hayumi.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;