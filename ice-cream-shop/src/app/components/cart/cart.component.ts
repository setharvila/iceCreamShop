import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Cart } from '../../model/cartEntry';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items: Cart[] = [];
  updatedPrice: number = 0;

  @Output() checkoutEvent = new EventEmitter<string>();

  goHome(){
    this.checkoutEvent.emit("GoHome")
  }

  constructor(private cartservice: CartService) {}

  ngOnInit() {
    this.items = this.cartservice.items;
  }

  priceTotal(): number{
    var i;
    var total = 0;
    for(i = 0; i < this.items.length; i++){
      total = total + this.items[i].price;
    }
    return total;
  }
  
  addMore(item: Cart){
    this.updatedPrice = item.originalPrice + item.price;
    item.price = this.updatedPrice;
    item.count++;
  }

  addLess(item: Cart){
    if(item.count > 1 && item.price > 1){
      this.updatedPrice = item.price - item.originalPrice;
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

  clearCart(){
    this.items = [];
  }
}