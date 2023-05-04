import { Injectable } from '@angular/core';
import {Account} from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  ACCOUNTS: Account[] = [];
  
  nextID: number = 0;
  
  getNextID(): number{
    return ++this.nextID;
  }
  addAccount(fname: string, lname: string, ph: number, email: string, pass: string){
    const newAccount: Account = {
      id: this.getNextID(), 
      firstName: fname,
      lastName: lname, 
      phone: ph, 
      emailAddress: email, 
      password = pass
    }
    this.ACCOUNTS.push(newAccount);
  }
  
  editAccount(id: number, newFirstName: string, newLastName: string, newPhone: number, newEmail: string, newPassword: string){
    this.ACCOUNTS[id].firstName = newFirstName;
    this.ACCOUNTS[id].lastName = newLastName;
    this.ACCOUNTS[id].phone = newPhone;
    this.ACCOUNTS[id].emailAddress = newEmail;
    this.ACCOUNTS[id].password = newPassword;
  }
  
  deleteAccount(id: number){
    this.ACCOUNTS[id].splice(id, 1);
  }
  
  
    
   


}

