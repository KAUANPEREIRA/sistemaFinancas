//exportando array para poder utilizar em outro local

import { Item } from "../types/Item";
export const items: Item[] = [
  {
    date: new Date(2023, 4, 1),
    category: "food",
    title: "McDonalds",
    value: 32.12,
  },
  {
    date: new Date(2023, 4, 3),
    category: "food",
    title: "Burger King",
    value: 28,
  },
  {
    date: new Date(2023, 4, 4),
    category: "rent",
    title: "Aluguel Apt",
    value: 2300,
  },
  {
    date: new Date(2023, 4, 5),
    category: "salary",
    title: "Salário ACME",
    value: 4500,
  },
];
