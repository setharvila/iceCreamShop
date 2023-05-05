import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ice-cream-shop';
  displayHome: boolean = true;
  displayMenu: boolean = false;
  displayManage: boolean = false;
  displayLogin: boolean = false;
  displayCart: boolean = false;


  displayPortal(){
    this.displayManage = true;
    this.displayHome = false;
    this.displayMenu = false;
  }

  displayLoginPage(){
    this.displayManage = false;
    this.displayHome = false;
    this.displayMenu = false;
    this.displayLogin = true;
  }

  displayCartPage(){
    this.displayCart = true;
    this.displayManage = false;
    this.displayHome = false;
    this.displayMenu = false;
    this.displayLogin = false;
  }
}
