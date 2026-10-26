export type Floater = {
  src: string;
  w: number;
  h: number;
  x: number; // posição horizontal, % da largura da seção
  y: number; // posição vertical, % da altura do palco
  size: number; // altura, fração da altura do temaki central
  rot: number; // inclinação em graus
};

export type Flavor = {
  slug: string;
  name: string;
  description: string;
  src: string;
  w: number;
  h: number;
  price: number; // valor aproximado, em reais (TODO: confirmar com o cardápio real)
  tone: string; // cor do sabor, usada no brilho, no nome e no preço quando selecionado
  floaters?: Floater[]; // ingredientes que flutuam em volta (opcional, entram numa próxima etapa)
};

export const flavors: Flavor[] = [
  { slug: "salmao-especial", name: "Salmão Especial", description: "Salmão em cubos com molho cremoso, cebolinha e gergelim.", src: "/images/flavors/salmao-especial.webp", w: 505, h: 1000, price: 38, tone: "#ff7f50" },
  { slug: "atum-tradicional", name: "Atum Tradicional", description: "Atum cru em cubos, pepino em tiras, cebolinha e gergelim.", src: "/images/flavors/atum-tradicional.webp", w: 499, h: 1000, price: 36, tone: "#ee4a6f" },
  { slug: "peixe-branco", name: "Peixe Branco", description: "Peixe branco em cubos, pepino, cebolinha e um toque cítrico.", src: "/images/flavors/peixe-branco.webp", w: 504, h: 1000, price: 34, tone: "#bcd8c8" },
  { slug: "ebi-fry", name: "Ebi Fry", description: "Camarão empanado e frito, molho tarê, cebolinha e gergelim.", src: "/images/flavors/ebi-fry.webp", w: 501, h: 1000, price: 36, tone: "#f2a93b" },
  { slug: "tropical", name: "Tropical", description: "Peixe com manga, flocos crocantes de tempurá e tarê.", src: "/images/flavors/tropical.webp", w: 494, h: 1000, price: 38, tone: "#ffd23f" },
  { slug: "ebi-crocante", name: "Ebi Crocante", description: "Camarão frito com cobertura crocante e molho tarê.", src: "/images/flavors/ebi-crocante.webp", w: 500, h: 1000, price: 36, tone: "#e4602d" },
  { slug: "salmao-grelhado", name: "Salmão Grelhado", description: "Salmão selado com cream cheese, pepino e tarê.", src: "/images/flavors/salmao-grelhado.webp", w: 474, h: 1000, price: 38, tone: "#d9794a" },
  { slug: "salmao-completo", name: "Salmão Completo", description: "Salmão, cream cheese, pepino em tiras e molho tarê.", src: "/images/flavors/salmao-completo.webp", w: 489, h: 1000, price: 40, tone: "#ff9f7a" },
];