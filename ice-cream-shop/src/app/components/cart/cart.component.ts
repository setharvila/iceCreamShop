import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/cartEntry';
import { MENU } from '../../data/menu-data';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items: Cart[] = [];
  updatedPrice: number = 0;

  constructor(private cartservice: CartService) {}

  ngOnInit() {
    this.items = this.cartservice.items;
  }

  addItemToCart(menuItem: any = MENU) {
    const newItem: Cart = {
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      count: 1,
    };
    this.cartservice.addToCart(newItem);
  }

  priceTotal(): number{
    var i = 0;
    var total = 0;
    for(i = 0; i > this.items.length; i++){
      total = total + this.items[i].price;
    }
    return total;
  }
  
  addMore(item: Cart){
    this.updatedPrice = item.price;
    this.updatedPrice = this.updatedPrice + item.price;
    item.price = this.updatedPrice;
    item.count++;
  }

  addLess(item: Cart){
    if(item.count > 0){
      this.updatedPrice = item.price;
      this.updatedPrice = this.updatedPrice - item.price;
      item.price = this.updatedPrice;
      item.count--;
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