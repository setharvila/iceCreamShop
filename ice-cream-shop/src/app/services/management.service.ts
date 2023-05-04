import { Injectable } from '@angular/core';
import { Account } from '../model/account';
import { MENU } from '../data/menu-data';
import { menuEntry } from '../model/menuEntry';
import { promotion } from '../model/promotion';
import { PROMOTIONS } from '../data/promotion-data';

@Injectable({
  providedIn: 'root'
})

/**
 * TODO: 
 * Change employees when we have the accounts service and whatnot implemented
 * All promotion methods
 * 
 */

export class ManagementService {

  constructor() { }

  menuId = MENU.length;
  promoId = PROMOTIONS.length;
  //change below to accounts when created
  id = MENU.length;

  addMenuEntry(name:string,description:string,allergyInfo:string,category:string,price: string){
    let pricen : number = Number.parseFloat(price)
    let me : menuEntry = {

      id: this.menuId,
      name: name,
      price: pricen,
      description: description,
      allergyInfo: allergyInfo,
      category: category,
    }
    MENU.push(me);
    this.menuId++;
  }

  deleteMenuEntry(index: number){
    MENU.splice(index,1)
    this.menuId--;
    for(let i = 0; i < MENU.length; i++){
      MENU[i].id = i;
    }
  }

  editMenuEntry(id:number,name:string,description:string,allergyInfo:string,category:string,price: string){
    let pricen : number = Number.parseFloat(price)
    MENU[id]={
      id: id,
      name: name,
      price: pricen,
      description: description,
      allergyInfo: allergyInfo,
      category: category,
    }
  }

  addEmployee(name:string,description:string,allergyInfo:string,category:string,price: number){
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

  editEmployee(id:number,name:string,description:string,allergyInfo:string,category:string,price: number){
    MENU[id]={
      id: id,
      name: name,
      price: price,
      description: description,
      allergyInfo: allergyInfo,
      category: category,
    }
  }

  addPromotion(name:string,description:string,category:string){
    let p : promotion = {
      id: this.id,
      name: name,
      description: description,
      category: category,
    }
    PROMOTIONS.push(p);
    this.id++;
  }

  deletePromotion(index: number){
    PROMOTIONS.splice(index,1)
    this.id--;
    for(let i = 0; i < PROMOTIONS.length; i++){
      PROMOTIONS[i].id = i;
    }
  }

  editPromotion(id:number,name:string,description:string,category:string){
    PROMOTIONS[id]={
      id: id,
      name: name,
      description: description,
      category: category,
    }
  }

}
