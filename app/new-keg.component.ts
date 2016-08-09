import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h3> Create Keg</h3>
      <input placeholder="Name" class="col-sm-6 input-lg" #newName/>
      <input placeholder="Brand" class="col-sm-6 input-lg" #newBrand/>
      <input type="number" name="myDecimal" ng-model="myDecimal" ng-pattern="/^[0-9]+(\.[0-9]{1,2})?$/" step="0.01" placeholder="Decimal" class="col-sm-6 input-lg" #newPrice/>
      <input placeholder="Alcohol Content" class="col-sm-6 input-lg" #newAlcoholContent/>
      <button (click)="addKeg(newName, newBrand, newPrice, newAlcoholContent)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcoholContent: HTMLInputElement){
    var params: String[] = [userName.value, userBrand.value, userPrice.value, userAlcoholContent.value]
    this.onSubmitNewKeg.emit(params);
    userName.value = "";
    userBrand.value ="";
    userPrice.value ="";
    userAlcoholContent.value ="";
  }
}
