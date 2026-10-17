export type Dish = {
  id: number;
  categoryId: number;
  name: string;
  price: number;
  description?: string;
};

export type Reservation = {
  id: number;
  name: string;
  reservedFor: string;
  partySize: number;
};
