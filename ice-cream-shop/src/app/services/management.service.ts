import { Injectable } from '@angular/core';
import { Account } from '../model/account';
import { MENU } from '../data/menu-data';
import { menuEntry } from '../model/menuEntry';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor() { }

  id = MENU.length;

  addMenuEntry(name:String,description:String,allergyInfo:String,category:String,price: number){
    let me : menuEntry = {
      id: this.id,
      name: name,
      price: price,
      description: description,
      allergyInfo: allergyInfo,
      category: category,
    }
    MENU.push(me);
    this.id++;
  }

  deleteMenuEntry(index: number){
    MENU.splice(index,1)
    this.id--;
    for(let i = 0; i < MENU.length; i++){
      MENU[i].id = i;
    }
  }

  editMenuEntry(id:number,name:String,description:String,allergyInfo:String,category:String,price: number){
    MENU[id]={
      id: id,
      name: name,
      price: price,
      description: description,
      allergyInfo: allergyInfo,
      category: category,
    }
  }

  addEmployee(name:String,description:String,allergyInfo:String,category:String,price: number){
    let me : menuEntry = {
      id: this.id,
      name: name,
      price: price,
      description: description,
      allergyInfo: allergyInfo,
      category: category,
    }
    MENU.push(me);
    this.id++;
  }

  deleteEmployee(index: number){
    MENU.splice(index,1)
    this.id--;
    for(let i = 0; i < MENU.length; i++){
      MENU[i].id = i;
    }
  }

  editEmployee(id:number,name:String,description:String,allergyInfo:String,category:String,price: number){
    MENU[id]={
      id: id,
      name: name,
      price: price,
      description: description,
      allergyInfo: allergyInfo,
      category: category,
    }
  }


}
