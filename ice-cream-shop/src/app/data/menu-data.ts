import { menuEntry } from '../model/menuEntry';

let n : number=0;

export const MENU: menuEntry[] = [
  {
    id: n++,
    name: 'Ice Cream Sundae',
    description: 'Normal sundae served on a vanilla cone',
    category: "Cones",
    allergyInfo: 'Dairy',
    price: 2.19,
  },
  {
    id: n++,
    name: 'Strawberry Blizzyz',
    description: 'Strawberry twist on the classic Blizzy',
    category: "Blizzyz",
    allergyInfo: 'Dairy',
    price: 3.49,
  },
  {
    id: n++,
    name: 'Strawberry Blizzyz',
    description: 'Strawberry twist on the classic Blizzy',
    category: "Blizzyz",
    allergyInfo: 'Dairy',
    price: 3.49,
  },
  {
    id: n++,
    name: 'Strawberry Blizzyz',
    description: 'Strawberry twist on the classic Blizzy',
    category: "Blizzyz",
    allergyInfo: 'Dairy',
    price: 3.49,
  },
  {
    id: n++,
    name: 'Chocolate Malt',
    description: 'Chocolate flavor infused in our famous malt',
    category: 'Shakes/Malts',
    allergyInfo: 'Dairy',
    price: 4.59,
  },
  {
    id: n++,
    name: 'Chocolate Chip Cookies',
    description: 'Cookies served hot and fresh',
    category: 'Sides',
    allergyInfo: 'Dairy',
    price: 3.0,
  },
];
