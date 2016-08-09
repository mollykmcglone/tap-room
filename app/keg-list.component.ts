import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { PintsRemainingPipe } from './pints-remaining.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  pipes: [PintsRemainingPipe],
  template: `
  <h2>Keg List</h2>
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show all kegs</option>
    <option value="less than 10 pints">Show kegs with 10 pints or less remaining</option>
    <option value="more than 10 pints">Show kegs with more than 10 pints remaining</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | pintsRemaining:filterPintsRemaining" (click)="kegClicked(currentKeg)" [class.selected]="currentKeg === selectedKeg" [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterPintsRemaining: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(params: string[]): void {
    this.kegList.push(new Keg(params[0], this.kegList.length, params[1], parseFloat(params[2]), parseFloat(params[3]), 124));
    console.log(this.kegList);
  }
  onChange(filterOption) {
    this.filterPintsRemaining = filterOption;
    console.log(this.filterPintsRemaining);
  }
}
