import { Component } from '@angular/core';
import { MENU } from 'src/app/data/menu-data';
import { menuEntry } from 'src/app/model/menuEntry';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {

  employee : boolean = false;
  menu : boolean = true;
  promotion : boolean = false;

  Menu : menuEntry[] = MENU;
  constructor(){

  }

  toMenu(){
    this.menu = true;
    this.employee = false;
    this.promotion = false;
  }
  
  toEmployee(){
    this.menu = false;
    this.employee = true;
    this.promotion = false;
  }
  
  toPromotion(){
    this.menu = false;
    this.employee = false;
    this.promotion = true;
  }


}
