import { Component } from '@angular/core';
import { MENU } from 'src/app/data/menu-data';
import { menuEntry } from 'src/app/model/menuEntry';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: Cart[] = [];
  menuItem: any = MENU;

  Menu : menuEntry[] = MENU; 

  addItemToCart(name: string, price: number) {
    const newItem: Cart = {
      id: this.menuItem.id,
      name: this.menuItem.name,
      price: this.menuItem.price,
    };
    this.items.push(newItem);
  }

}
