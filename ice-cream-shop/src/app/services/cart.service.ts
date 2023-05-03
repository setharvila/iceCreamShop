  import { Injectable } from '@angular/core';
  import { menuEntry } from '../model/menuEntry';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: menuEntry[] = [];
  
  addItemToCart(id: number, name: string, price: number) {
    const newItem: Account = {
      id: this.menu.id,
      name: this.menu.name,
      price: this.menu.price,
    };
    this.items.push(newItem);
  }
  
  editItem(id: number, name: string, description: string, allergyInfo: string, price: number) {
    this.items[id].name = fName;
    this.items[id].description = description;
    this.items[id].allergyInfo = allergyInfo;
    this.items[id].price = price;
  }

  deleteContact(contact: Contact) {
    const index = this.contactList.indexOf(contact);
    if (index >= 0) this.contactList.splice(index, 1);
  } 
}
