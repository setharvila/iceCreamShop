import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  sid: number = 0;
  sname: string = '';
  sprice: string = 0;
  constructor(private menu: menu-data) {}

  ngOnInit() {}

  addItem() {
    const newItem: Contact = {
      id: this.sid,
      name: this.sname,
      price: this.sprice,
    };
    this.cntctService.addContact(newItem);
  }
  
  editContact(id: number, name: string, price: number) {
    this.items[id].name = fName;
    this.items[id].price = price;
  }

  deleteContact(contact: Contact) {
    const index = this.contactList.indexOf(contact);
    if (index >= 0) this.contactList.splice(index, 1);
  } 
}
