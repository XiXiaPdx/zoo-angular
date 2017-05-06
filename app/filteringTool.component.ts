import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './Animal.model';

@Component({
  selector: 'filter-tool',
  template: `
  <h5>Slide to age. Click younger or older.</h5>

    <p class="range-field" tabindex="0">
     <input type="range" [(ngModel)]="animalAge" value = {{selectedAnimalAge}} (change)="displaySearchAge(animalAge)" id="ageSlider" min="0" max="10010" step="10"/>
   </p>
   <h5> Selected age: {{selectedAnimalAge}}</h5>
   <button class="btn" (click)="filterByAge(selectedAnimalAge, 'younger')"  tabindex="0"> Younger</button>
   <button class="btn" (click)="filterByAge(selectedAnimalAge, 'older')"  tabindex="0"> Older</button>
  `
})

export class FilteringToolComponent {
  @Output () filterSender = new EventEmitter;

  selectedAnimalAge:string = "5000";
  youngerOlder: string;
 displaySearchAge(age){
   this.selectedAnimalAge = age;
 }
 filterByAge(filterAge, value){
   var filterPackage = [filterAge,this.youngerOlder=value];
   this.filterSender.emit(filterPackage);
 }
}
