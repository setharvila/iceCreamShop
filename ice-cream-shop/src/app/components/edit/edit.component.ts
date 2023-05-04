import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MENU } from 'src/app/data/menu-data';
import { menuEntry } from 'src/app/model/menuEntry';
import { ManagementService } from 'src/app/services/management.service';
import { ManageComponent } from '../manage/manage.component';
import { promotion } from 'src/app/model/promotion';
import { PROMOTIONS } from 'src/app/data/promotion-data';

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
    category: ['']
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

    }
  }

  constructor(
    private fb: FormBuilder,
    public ms: ManagementService,
    private mc: ManageComponent
  ) {
    if(this.mc.last == "promo"){
      this.toPromotion();
    }    
    if(this.mc.last == "menu"){
      this.toEdit();
    }
    if(this.mc.last == "employee"){
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
