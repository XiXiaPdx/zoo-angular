import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './Animal.model';

@Component({
  selector: 'filter-tool',
  template: `
  <h5>Use slider to filter by animal age</h5>

    <p class="range-field" tabindex="0">
     <input type="range" [(ngModel)]="animalAge" value = {{selectedAnimalAge}} (change)="displaySearchAge(animalAge)" id="ageSlider" min="0" max="10010" step="10"/>
   </p>
   <h5> Selected age: {{selectedAnimalAge}}</h5>
   <md-radio-group class="ageFilter"[(ngModel)]="youngerOlder" (change)="filterByAge(selectedAnimalAge)">
     <md-radio-button value="younger" class="ageRadioButton"  >
       <h5>Find Younger</h5>
     </md-radio-button>
     <md-radio-button  value="older" class="ageRadioButton" >
       <h5>Find Older</h5>
     </md-radio-button>
   </md-radio-group>
  `
})

export class FilteringToolComponent {
  @Output () filterSender = new EventEmitter;

  selectedAnimalAge:string = "5000";
  youngerOlder: string;
 displaySearchAge(age){
   this.selectedAnimalAge = age;
 }
 filterByAge(filterAge){
   var filterPackage = [filterAge,this.youngerOlder];
   console.log(filterPackage);
   this.filterSender.emit(filterPackage);
 }
}
