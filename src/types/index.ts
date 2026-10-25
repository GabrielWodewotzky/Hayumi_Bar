export type MenuItem = {
  name: string;
  description?: string;
  price?: number; // em reais; omitido enquanto não houver preço definido
};

export type MenuCategory = {
  id: string;
  title: string;
  intro?: string;
  items: MenuItem[];
};

export type FeaturedDish = {
  name: string;
  description: string;
  src: string;
  w: number;
  h: number;
};