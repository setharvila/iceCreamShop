import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MENU } from 'src/app/data/menu-data';
import { menuEntry } from 'src/app/model/menuEntry';
import { ManagementService } from 'src/app/services/management.service';
import { ManageComponent } from '../manage/manage.component';
import { promotion } from 'src/app/model/promotion';
import { PROMOTIONS } from 'src/app/data/promotion-data';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  add: boolean = !this.mc.edit;
  employee: boolean = false;
  menu: boolean = true;
  promotion: boolean = false;
  placeID: number = 0;
  menuList: menuEntry[] = MENU;
  promoList: promotion[] = PROMOTIONS;
  employeeList: Account[] = this.AS.ACCOUNTS;

  menuForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    category: [''],
    allergenInfo: [''],
    price: [0, Validators.min(0)],
  });

  promoForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    category: [''],
  });

  employeeForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailAddress: ['', Validators.required],
    password: ['', Validators.required],
    phone: [0, Validators.max(9999999999)],
    isEmployee: false,
    isManager: false,
  });

  ngOnInit(): void {
    if (this.mc.edit) {
      this.menuForm.get('name')?.setValue(this.menuList[this.mc.editID].name);
      this.menuForm
        .get('description')
        ?.setValue(this.menuList[this.mc.editID].description);
      this.menuForm
        .get('category')
        ?.setValue(this.menuList[this.mc.editID].category);
      this.menuForm
        .get('allergenInfo')
        ?.setValue(this.menuList[this.mc.editID].allergyInfo);
      this.menuForm.get('price')?.setValue(this.menuList[this.mc.editID].price);

      //--------------------------------------------------------------------

      this.promoForm.get('name')?.setValue(this.promoList[this.mc.editID].name);
      this.promoForm
        .get('description')
        ?.setValue(this.promoList[this.mc.editID].description);
      this.promoForm
        .get('category')
        ?.setValue(this.promoList[this.mc.editID].category);

      //---------------------------------------------------------------------

      this.employeeForm
        .get('firstName')
        ?.setValue(this.employeeList[this.mc.editID].firstName);
        this.employeeForm
        .get('lastName')
        ?.setValue(this.employeeList[this.mc.editID].lastName);
        this.employeeForm
        .get('phone')
        ?.setValue(this.employeeList[this.mc.editID].phone);
        this.employeeForm
        .get('emailAddress')
        ?.setValue(this.employeeList[this.mc.editID].emailAddress);
        this.employeeForm
        .get('password')
        ?.setValue(this.employeeList[this.mc.editID].password);
        this.employeeForm
        .get('isEmployee')
        ?.setValue(this.employeeList[this.mc.editID].isEmployee);
        this.employeeForm
        .get('isManager')
        ?.setValue(this.employeeList[this.mc.editID].isManager);
    }
  }

  get f(){
    return this.menuForm.invalid
  }

  constructor(
    private fb: FormBuilder,
    public ms: ManagementService,
    private mc: ManageComponent,
    public AS: AccountService
  ) {
    if (this.mc.last == 'promo') {
      this.toPromotion();
    }
    if (this.mc.last == 'menu') {
      this.toMenu();
    }
    if (this.mc.last == 'employee') {
      this.toEmployee();
    }
  }

  toMenu() {
    this.menu = true;
    this.employee = false;
    this.promotion = false;
  }

  toEmployee() {
    this.menu = false;
    this.employee = true;
    this.promotion = false;
  }

  toPromotion() {
    this.menu = false;
    this.employee = false;
    this.promotion = true;
  }

  toEdit() {
    this.menu = false;
    this.employee = false;
    this.promotion = false;
  }

  cancel() {
    this.mc.otherPage = false;
    this.mc.menu = true;
  }
}
