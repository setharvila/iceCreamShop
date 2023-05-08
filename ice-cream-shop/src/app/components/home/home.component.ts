import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  goToMenu(){
    this.newItemEvent.emit("GoToMenu")
  }

}
