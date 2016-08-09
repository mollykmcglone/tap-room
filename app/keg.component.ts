import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs:['keg'],
  template:`
  <div>
    <button type="submit" class="btn btn-warning" (click)="minusOne()"/>
    <label>{{ keg.name }}, {{ keg.brand }}, {{ keg.price }}, {{ keg.alcoholContent}}%, {{ keg.pintsRemaining}} pints remaining</label>
  </div>
  `
})

export class KegComponent {
  public keg: Keg;
  minusOne() {
    this.keg.pintsRemaining -= 1;
  }
}
