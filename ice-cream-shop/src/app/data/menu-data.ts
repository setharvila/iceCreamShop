import { menuEntry } from '../model/menuEntry';

export const MENU: menuEntry[] = [
  {
    id: 0,
    name: 'Ice Cream Sundae',
    description: 'Normal sundae served on a vanilla cone',
    category: "Cones",
    allergyInfo: 'Dairy',
    price: 2.19,
  },
  {
    id: 1,
    name: 'Strawberry Blizzyz',
    description: 'Strawberry twist on the classic Blizzy',
    category: "Blizzyz",
    allergyInfo: 'Dairy',
    price: 3.49,
  },
  {
    id: 2,
    name: 'Chocolate Malt',
    description: 'Chocolate flavor infused in our famous malt',
    category: 'Shakes/Malts',
    allergyInfo: 'Dairy',
    price: 4.59,
  },
  {
    id: 3,
    name: 'Chocolate Chip Cookies',
    description: 'Cookies served hot and fresh',
    category: 'Sides',
    allergyInfo: 'Dairy',
    price: 3.0,
  },
];
