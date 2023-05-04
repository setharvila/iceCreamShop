import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ice-cream-shop';
  displayHome: boolean = false;
  displayMenu: boolean = false;
  displayManage: boolean = true;


  displayPortal(){
    this.displayManage = true;
    this.displayHome = false;
    this.displayMenu = false;
  }
}
