  import { Injectable } from '@angular/core';
  import { MENU } from '../data/menu-data';
  import { Cart } from '../model/cartEntry';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Cart[] = [];
  
  addItemToCart(id: number, name: string, price: number) {
    const newItem: Cart = {
      id: this.MENU.id,
      name: this.MENU.name,
      price: this.MENU.price,
    };
    this.items.push(newItem);
  }

  deleteItem(item: Cart) {
    const index = this.items.indexOf(item);
    if (index >= 0) this.items.splice(index, 1);
  } 
}
