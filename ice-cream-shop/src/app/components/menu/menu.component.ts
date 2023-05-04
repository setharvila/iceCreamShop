import { Component } from '@angular/core';
import { MENU } from 'src/app/data/menu-data';
import { menuEntry } from 'src/app/model/menuEntry';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  Menu : menuEntry[] = MENU; 

}
