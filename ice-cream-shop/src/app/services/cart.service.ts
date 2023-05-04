  import { Injectable } from '@angular/core';
  import { MENU } from '../data/menu-data';
  import { Cart } from '../model/cartEntry';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Cart[] = [];
  count: number = 1;
  
  addItemToCart(name: string, price: number) {
    const newItem: Cart = {
      name: this.MENU.name,
      price: this.MENU.price,
    };
    this.items.push(newItem);
  }

  addMore(item: Cart){
    updatedPrice: number = item.price;
    updatedPrice = updatedPrice + item.price;
    item.price = updatedPrice;
    count++;
  }

  addLess(item: Cart){
    if(count > 0){
      updatedPrice: number = item.price;
      updatedPrice = updatedPrice - item.price;
      item.price = updatedPrice;
      count--;
    }
    else{
      this.deleteItem(item);
    }
  }

  deleteItem(item: Cart) {
    const index = this.items.indexOf(item);
    if (index >= 0) this.items.splice(index, 1);
  } 
}
