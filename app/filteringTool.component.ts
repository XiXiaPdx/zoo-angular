import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './Animal.model';

@Component({
  selector: 'filter-tool',
  template: `
  <h5>Slide to age. Click younger or older.</h5>
  <div class="row">
    <div class="col s3">
      <md-slider (input)="onInputChange($event)" vertical thumbLabel min="0" max="10000" step="10" [(ngModel)]="selectedAnimalAge">
      </md-slider>
    </div>
    <div class="col s9">
    <button class="btn" (click)="filterByAge(selectedAnimalAge, 'younger')"  tabindex="0"> Younger</button>
    <br>
    <button class="btn" (click)="filterByAge(selectedAnimalAge, 'older')"  tabindex="0"> Older</button>
    </div>
  </div>
   <h5> Selected age: {{selectedAnimalAge}}</h5>

   <button class="btn" (click)="filterByAge('0', 'older')"  tabindex="0"> All Animals</button>
  `
})

export class FilteringToolComponent {
  @Output () filterSender = new EventEmitter;

  selectedAnimalAge:string = "5000";
  youngerOlder: string;

onInputChange(event: any){
  this.selectedAnimalAge = event.value;
}

 displaySearchAge(age){
   this.selectedAnimalAge = age;
 }
 filterByAge(filterAge, value){
   var filterPackage = [filterAge,this.youngerOlder=value];
   this.filterSender.emit(filterPackage);
 }
}
