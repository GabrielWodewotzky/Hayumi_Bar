export type HeroImage = { src: string; w: number; h: number };

export const temaki: HeroImage = { src: "/images/banner/temaki.webp", w: 560, h: 1093 };

export type Dish = {
  id: string;
  src: string;
  w: number; // dimensões reais do arquivo (para o next/image)
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

export const dishes: Dish[] = [
  { id: "nigiri", src: "/images/banner/nigiri.webp", w: 1000, h: 666, x: 16, y: 26, size: 0.14, mx: 10, my: 12, msize: 0.17, z: 4, rot: -14, blur: 0, dur: 6.4, delay: 0 },
  { id: "yakitori", src: "/images/banner/yakitori.webp", w: 1000, h: 789, x: 78, y: 16, size: 0.19, mx: 70, my: 9, msize: 0.24, z: 4, rot: 24, blur: 0, dur: 7.2, delay: -2 },
  { id: "uramaki", src: "/images/banner/uramaki.webp", w: 678, h: 810, x: 88, y: 46, size: 0.1, mx: 91, my: 38, msize: 0.13, z: 4, rot: 12, blur: 0, dur: 5.8, delay: -1 },
  { id: "gyoza", src: "/images/banner/gyoza.webp", w: 941, h: 669, x: 80, y: 76, size: 0.12, mx: 88, my: 72, msize: 0.15, z: 4, rot: -20, blur: 0, dur: 6.6, delay: -3 },
  { id: "tempura", src: "/images/banner/tempura.webp", w: 1000, h: 764, x: 22, y: 76, size: 0.17, mx: 14, my: 70, msize: 0.2, z: 4, rot: -24, blur: 0, dur: 7, delay: -1.5 },
  { id: "nigiri-fundo", src: "/images/banner/nigiri.webp", w: 1000, h: 666, x: 33, y: 52, size: 0.09, mx: 8, my: 54, msize: 0.11, z: 1, rot: 20, blur: 2, dur: 8, delay: -4 },
  { id: "gyoza-fundo", src: "/images/banner/gyoza.webp", w: 941, h: 669, x: 68, y: 34, size: 0.08, mx: 90, my: 22, msize: 0.1, z: 1, rot: -30, blur: 2.5, dur: 8.4, delay: -2.5 },
];