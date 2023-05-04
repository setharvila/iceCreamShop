import { Component } from '@angular/core';
import { MENU } from 'src/app/data/menu-data';
import { PROMOTIONS } from 'src/app/data/promotion-data';
import { menuEntry } from 'src/app/model/menuEntry';
import { promotion } from 'src/app/model/promotion';
import { ManagementService } from 'src/app/services/management.service';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent {
  employee: boolean = false;
  menu: boolean = true;
  promotion: boolean = false;
  edit: boolean = false;
  otherPage: boolean = false;
  editID: number = 0;
  last: string = '';
  Menu: menuEntry[] = MENU;
  Promotions: promotion[] = PROMOTIONS;
  //Accounts: Account[];

  constructor(private MS: ManagementService) {}

  toMenu() {
    this.menu = true;
    this.employee = false;
    this.promotion = false;
    this.edit = false;
    this.otherPage = false;
    this.last = 'menu';
  }

  toEmployee() {
    this.menu = false;
    this.employee = true;
    this.promotion = false;
    this.edit = false;
    this.otherPage = false;
    this.last = 'employee';
  }

  toPromotion() {
    this.menu = false;
    this.employee = false;
    this.promotion = true;
    this.edit = false;
    this.otherPage = false;
    this.last = 'promo';
  }

  toEdit() {
    this.menu = false;
    this.employee = false;
    this.promotion = false;
    this.edit = true;
    this.otherPage = true;
  }

  toAdd() {
    this.menu = false;
    this.employee = false;
    this.promotion = false;
    this.edit = false;
    this.otherPage = true;
  }

  editItem(id: number) {
    this.editID = id;
    this.toEdit();
  }

  delete(id: number) {
    if (this.menu) {
      this.MS.deleteMenuEntry(id);
    }
    if (this.employee) {
      this.MS.deleteEmployee(id);
    }
    if (this.promotion) {
      this.MS.deletePromotion(id);
    }
  }
}
