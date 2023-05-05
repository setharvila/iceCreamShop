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
  count: number = 1;
  menuItem: any = MENU;
  updatedPrice: number = 0;

  constructor(private cartservice: CartService) {}

  ngOnInit() {
    this.items = this.cartservice.items;
  }

  addItemToCart(name: string, price: number) {
    const newItem: Cart = {
      id: this.menuItem.id,
      name: this.menuItem.name,
      price: this.menuItem.price,
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
