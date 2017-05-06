import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "filterByAge",
  pure: false

})


export class FilterByAgePipe implements PipeTransform {
  transform(input: Animal[], age, youngerOlder){
    if (age ==="all"){
      return input;
    }
    var output: Animal [] = [];
    if (youngerOlder === "younger") {
      output = input.filter(function (animal) {
          return animal.age < age;
      });
    }
      return output;
  }
}
