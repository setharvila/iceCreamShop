import { Component, Input } from '@angular/core';
import { AccountService } from 'src/app/services/account.service'; 
import {Account} from 'src/app/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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

  addNewAccount(){
    this.accountService.addAccount(this.id, this.firstName, this.lastName, this.phone, this.emailAddress, this.password, this.isEmployee, this.isManager);
  }

  removeAccount(){
    this.accountService.deleteAccount(this.id);
  }

  canLogin(){
    this.accountService.checkLogin(this.inputEmail, this.inputPassword);
  }

}
