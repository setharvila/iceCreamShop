import { Injectable } from '@angular/core';
import { Cart } from '../model/cartEntry';

@Injectable({
providedIn: 'root'
})
export class CartService {
items: Cart[] = [];

addToCart(newItem: Cart){
  this.items.push(newItem);
}
}
