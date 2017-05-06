import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {Animal} from './Animal.model';

declare var jQuery: any;

@Component({
  selector: 'filtered-animals',
  template: `
  <md-grid-list cols="2" rowHeight="5:6" gutterSize="20px">
  <md-grid-tile class="" *ngFor="let animal of filteredAnimalList; let i = index">
    <md-card>
  <md-card-title> {{animal.name}} - <span class="speciesDisplay">{{animal.species}}</span>	</md-card-title>
  <img class="materialboxed responsive-img" src="{{animal.imageUrl}}" tabindex="0" alt="{{animal.name}} the {{animal.species}}">
  <h3> {{animal.name}} is {{animal.age}} years old, feeds on {{animal.diet}}, and reside at {{animal.location}}.</h3>
    <div class="chip"> Sex is {{animal.sex}}</div>
    <div class="chip"> Likes {{animal.likes}} </div>
    <div class="chip"> Dislikes {{animal.dislikes}} </div>
  
    <button md-button> toggle Edit On</button>
    </md-card>
  </md-grid-tile>
    </md-grid-list>
  `
})

export class FilteredAnimalsComponent {
  @Input () filteredAnimalList: Animal [];

  ngAfterViewInit() {
     jQuery('.materialboxed').materialbox();
   }

}
