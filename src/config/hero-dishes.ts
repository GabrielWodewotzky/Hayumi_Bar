export type HeroImage = { src: string; w: number; h: number };

// temaki central
export const temaki: HeroImage = { src: "/images/banner/temaki.webp", w: 560, h: 1093 };

export type Dish = {
  id: string;
  src: string;
  w: number; // dimensões do arquivo (usadas só como proporção inicial pelo next/image)
  h: number;
  x: number; // posição no desktop, % do banner
  y: number;
  size: number; // largura no desktop, fração da menor dimensão do banner
  mx: number; // posição no celular
  my: number;
  msize: number; // largura no celular
  z: number; // 1 = atrás das letras, 4 = na frente
  rot: number; // inclinação base, em graus
  blur: number; // desfoque (profundidade de campo), em px
  dur: number; // duração do balanço, em segundos
  delay: number;
};

/*
  Seis pratos, um por região:
  esquerda: nigiri (alto) e jow (baixo) · topo: yakitori
  direita: uramaki (alto) e hotroll (baixo) · embaixo: tempurá
*/
export const dishes: Dish[] = [
  { id: "nigiri", src: "/images/banner/nigiri.webp", w: 1000, h: 666, x: 12, y: 24, size: 0.15, mx: 11, my: 9, msize: 0.17, z: 4, rot: -14, blur: 0, dur: 6.4, delay: 0 },
  { id: "yakitori", src: "/images/banner/yakitori.webp", w: 1000, h: 789, x: 68, y: 13, size: 0.2, mx: 72, my: 9, msize: 0.24, z: 4, rot: 24, blur: 0, dur: 7.2, delay: -2 },
  { id: "uramaki", src: "/images/banner/uramaki.webp", w: 678, h: 810, x: 89, y: 32, size: 0.11, mx: 91, my: 30, msize: 0.12, z: 4, rot: 12, blur: 0, dur: 5.8, delay: -1.2 },
  { id: "jow", src: "/images/banner/jow.png", w: 800, h: 800, x: 9, y: 62, size: 0.12, mx: 8, my: 42, msize: 0.14, z: 4, rot: -10, blur: 0, dur: 6.8, delay: -2.6 },
  { id: "hotroll", src: "/images/banner/hotroll.png", w: 800, h: 800, x: 86, y: 70, size: 0.12, mx: 88, my: 56, msize: 0.14, z: 4, rot: 10, blur: 0, dur: 5.6, delay: -1 },
  { id: "tempura", src: "/images/banner/tempura.webp", w: 1000, h: 764, x: 33, y: 84, size: 0.17, mx: 22, my: 71, msize: 0.18, z: 4, rot: -24, blur: 0, dur: 7, delay: -1.5 },
];