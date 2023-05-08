import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/services/account.service'; 
import { Account } from 'src/app/model/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() checkoutEvent = new EventEmitter<string>();

  goHome(){
    this.checkoutEvent.emit("GoHome")
  }


  constructor(private accountService: AccountService){}

  inputEmail: string = '';
  inputPassword: string = '';

  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  phone: number = 0;
  emailAddress: string = '';
  password: string = '';
  isEmployee: boolean = false;
  isManager: boolean = false;

  addNewAccount(firstName: string, lastName: string, phone: string, email: string, password: string, employee: string, manager: string){

    this.accountService.addAccount(firstName, lastName, Number(phone), email, password, Boolean(employee), Boolean(manager));                           
  }

  removeAccount(){
    this.accountService.deleteAccount(this.id);
  }

  canLogin(email: string, password: string){
    this.accountService.checkLogin(email, password);
  }

}
