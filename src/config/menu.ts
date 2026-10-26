import { flavors } from "@/config/flavors";
import type { FeaturedDish, MenuCategory } from "@/types";

export const menu: MenuCategory[] = [
  {
    id: "temakis",
    title: "Temakis",
    intro: "Montados na hora, com nori crocante e arroz ainda morno.",
    items: flavors.map((f) => ({ name: `Temaki ${f.name}`, description: f.description, price: f.price })),
  },
  {
    id: "sushis",
    title: "Sushis e rolls",
    items: [
      { name: "Nigiri de salmão", description: "Fatia de salmão sobre arroz de sushi." },
      { name: "Uramaki de salmão", description: "Rolo invertido com gergelim e salmão no centro." },
      { name: "Jow" }, // TODO: adicionar descrição
      { name: "Hot roll" }, // TODO: adicionar descrição
    ],
  },
  {
    id: "quentes",
    title: "Quentes",
    items: [
      { name: "Yakitori", description: "Espeto de frango grelhado com molho tarê." },
      { name: "Gyoza", description: "Pastel japonês grelhado, com a base dourada e crocante." },
      { name: "Ebi tempurá", description: "Camarão empanado e frito, bem crocante." },
    ],
  },
];

// pratos em destaque na home (apenas os que já têm foto recortada)
export const featured: FeaturedDish[] = [
  { name: "Temaki", description: "O cone montado na hora, do nori ao recheio.", src: "/images/banner/temaki.webp", w: 560, h: 1093 },
  { name: "Nigiri", description: "Salmão fresco sobre arroz de sushi.", src: "/images/banner/nigiri.webp", w: 1000, h: 666 },
  { name: "Uramaki", description: "Rolo com gergelim e salmão no centro.", src: "/images/banner/uramaki.webp", w: 678, h: 810 },
  { name: "Yakitori", description: "Frango grelhado com molho tarê.", src: "/images/banner/yakitori.webp", w: 1000, h: 789 },
  { name: "Gyoza", description: "Pastel japonês com base crocante.", src: "/images/banner/gyoza.webp", w: 941, h: 669 },
  { name: "Ebi tempurá", description: "Camarão empanado e frito.", src: "/images/banner/tempura.webp", w: 1000, h: 764 },
];