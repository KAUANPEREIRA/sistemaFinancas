//exportando array para poder utilizar em outro local

import { Item } from "../types/Item";
export const items: Item[] = [
  {
    date: new Date(2023, 4, 4),
    category: "food",
    title: "MC Donalds",
    value: 32.12,
  },
  {
    date: new Date(2023, 4, 4),
    category: "food",
    title: "Burguer King",
    value: 28,
  },
  {
    date: new Date(2023, 4, 4),
    category: "rent",
    title: "Aluguel Apartamento",
    value: 2300,
  },
  {
    date: new Date(2023, 4, 4),
    category: "salary",
    title: "Salario",
    value: 4500,
  },
];
