import { Injectable } from '@angular/core';
import {Account} from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  nextID: number =0;

  ACCOUNTS: Account [] = [];

  getNextID(): number {
    return this.nextID++;
  }

  addAccount(fname: string, lname: string, phone: number, email: string, password: string, isNewEmployee: boolean, isNewManager: boolean){
    const newAccount: Account = {
      id: this.getNextID(),
      firstName: fname, 
      lastName: lname, 
      phone: phone,
      emailAddress: email, 
      password: password,
      isEmployee: isNewEmployee,  
      isManager: isNewManager
    }
    this.ACCOUNTS.push(newAccount);
  }

  editAccount(id: number, newFirstName: string, newLastName: string, newPhone: number,
              newEmail: string, newPassword: string, isNewEmployee: boolean, isNewManager: boolean){
    this.ACCOUNTS[id].firstName = newFirstName
    this.ACCOUNTS[id].lastName = newLastName;
    this.ACCOUNTS[id].phone = newPhone;
    this.ACCOUNTS[id].emailAddress = newEmail;
    this.ACCOUNTS[id].password = newPassword;
    this.ACCOUNTS[id].isEmployee = isNewEmployee;
    this.ACCOUNTS[id].isManager = isNewManager;
  }

  deleteAccount(id: number){
    this.ACCOUNTS.splice(id, 1);    
  }

  isPasswordValid(id: number, enteredPassword: string): boolean {
    if(this.ACCOUNTS[id].password == enteredPassword)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}

