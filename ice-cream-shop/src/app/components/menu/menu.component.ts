import { Component } from '@angular/core';
import { MENU } from 'src/app/data/menu-data';
import { menuEntry } from 'src/app/model/menuEntry';
import { Cart } from 'src/app/model/cartEntry';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: Cart[] = [];
  menuItem: any = MENU;
  Menu : menuEntry[] = MENU; 
  constructor(private cartservice: CartService) {}

  addItemToCart() {
    this.cartservice.addToCart(this.menuItem);
  }

}
