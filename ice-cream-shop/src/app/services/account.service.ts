import { Injectable } from '@angular/core';
import {Account} from '../model/account';
import{HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  nextID: number = 0;

  ACCOUNTS: Account [] = [
    {id: this.getNextID(), firstName: 'Sheldon', lastName: 'Cooper', phone: 7015554545, emailAddress: 'cooper.sheldon@gmail.com', 
     password: 'ilovepenny', isEmployee: true, isManager: false},
    {id: this.getNextID(), firstName: 'Penny', lastName: 'Hofstadter', phone: 7015556789, emailAddress: 'hofstadter.penny@gmail.com', 
     password: 'sheldonsucks', isEmployee: false, isManager: false},
    {id: this.getNextID(), firstName: 'Howard', lastName: 'Wolowitz', phone: 7015551233, emailAddress: 'wolowitz.howard@gmail.com',
     password: 'sweetbernadette', isEmployee: false, isManager: false}
  ];
  getNextID(): number {
    return this.nextID++;
  }

  addAccount(fname: string,
             lname: string, 
             phone: number, 
             email: string, 
             password: string, 
             isNewEmployee: boolean, 
             isNewManager: boolean){
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


  editAccount(id: number, 
              newFirstName: string, 
              newLastName: string, 
              newPhone: number,
              newEmail: string, 
              newPassword: string, 
              isNewEmployee: boolean, 
              isNewManager: boolean){

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


  checkLogin(email: string, password: string): boolean {
    const tempID: number = 0;
    for(let i=0; i < this.accountService.ACCOUNTS.length; i++)
    {
      if(email == this.accountService.ACCOUNTS[i].emailAddress)
      {
        tempID = i;
      }
    }
    if(password == this.accountService.ACCOUNTS[tempID].password)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}

