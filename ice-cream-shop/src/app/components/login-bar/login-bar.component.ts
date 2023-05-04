import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent {
  // isEmployee: boolean = true;
  // isCustomer: boolean = true;
  // isNotLoggedIn: boolean = true;

  isEmployee: boolean = true;
  isCustomer: boolean = false;
  isNotLoggedIn: boolean = false;

  @Output() newItemEvent = new EventEmitter<string>();

  goToPortal(){
    this.newItemEvent.emit("GoToPortalClicked")
  }

}


