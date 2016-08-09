import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "pintsRemaining",
  pure: false
})

export class PintsRemainingPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredPintsRemaining = args[0];
    if(desiredPintsRemaining === "less than 10 pints") {
      return input.filter(function(keg){
        return keg.pintsRemaining <= 10;
      });
    } else if (desiredPintsRemaining === "more than 10 pints") {
      return input.filter(function(keg){
        return keg.pintsRemaining > 10;
      });
    } else {
      return input;
    }
  }
}
