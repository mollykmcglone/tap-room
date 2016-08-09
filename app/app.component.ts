import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <keg-list
      [kegList]="kegs"
      (onKegSelect)="kegWasSelected($event)">
    </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Double Chocolate Stout", "Rogue", 6.00, 9.8, 9),
      new Keg("The Wedding Red", "Fingers Crossed", 2.00, 6.8, 45),
      new Keg("Cucumber Sour", "10 Barrel", 5.00, 4.5, 124)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
  }
}
