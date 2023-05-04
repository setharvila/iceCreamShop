  import { Injectable } from '@angular/core';
  import { MENU } from '../data/menu-data';
  import { Cart } from '../model/cartEntry';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Cart[] = [];
  count: number = 1;
  MENU: any = MENU;
  updatedPrice: number = 0;
  
  addItemToCart(name: string, price: number) {
    const newItem: Cart = {
      id: this.MENU.id,
      name: this.MENU.name,
      price: this.MENU.price,
    };
    this.items.push(newItem);
  }

  addMore(item: Cart){
    this.updatedPrice = item.price;
    this.updatedPrice = this.updatedPrice + item.price;
    item.price = this.updatedPrice;
    this.count++;
  }

  addLess(item: Cart){
    if(this.count > 0){
      this.updatedPrice = item.price;
      this.updatedPrice = this.updatedPrice - item.price;
      item.price = this.updatedPrice;
      this.count--;
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
