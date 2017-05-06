import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {Animal} from './Animal.model';

declare var jQuery: any;

@Component({
  selector: 'filtered-animals',
  template: `
  <div class="row scale-transition {{test}}">
  <button class="btn btn-large edit" (click)="disappear()"   tabindex="0"> Edit Details</button>
  <md-grid-list  cols="2" rowHeight="4:7" gutterSize="20px">
  <md-grid-tile  *ngFor="let animal of filteredAnimalList; let i = index">
    <md-card >
  <md-card-title> {{animal.name}} - <span class="speciesDisplay">{{animal.species}}
</span>	</md-card-title>
  <img class="materialboxed responsive-img" src="{{animal.imageUrl}}" tabindex="0" alt="{{animal.name}} the {{animal.species}}">
<md-card-content>
{{animal.name}} is {{animal.age}} years old, feeds on {{animal.diet}}, and resides at {{animal.location}}.
</md-card-content>
<div class="row">
    <md-card-content>
    <i class="small material-icons">thumb_up</i>
    {{animal.likes}}
    </md-card-content>
    <md-card-content>
    <i class="small material-icons">thumb_down</i>
{{animal.dislikes}}
</md-card-content>
  <button class="btn btn-large edit" (click)="disappear()"   tabindex="0"> Edit Details</button></div>
    </md-card>
  </md-grid-tile>
    </md-grid-list>
    </div>
  `
})

export class FilteredAnimalsComponent {
  @Input () filteredAnimalList: Animal [];

test: string;

  ngAfterViewInit() {
     jQuery('.materialboxed').materialbox();
   }

disappear(){
  var self=this;
  var replace = function(){
    self.test="scale-in";
    console.log("step 2");
  }
  var remove = function () {
    return new Promise (function(resolve,reject){
      self.test="scale-out";
      console.log("step 1");
          resolve();
          reject();
        });
  }
  remove().then(function(){
    replace();
  });

}

}
