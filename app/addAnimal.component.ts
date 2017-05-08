import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './Animal.model';


@Component({
  selector: 'add-animal',
  template: `

  <md-card id="addAnimalForm" >
    <md-card-title tabindex="0" aria-label="New Animal Details Form">	 New Animal Details  </md-card-title>
    <div class="input-field" >
     <input  aria-label="Add animal name" placeholder="Animal Name" id="name" tabindex="0" type="text" class="validate" #name>
    </div>
    <div class="input-field" >
     <input  placeholder = "Animal Species" aria-label="Add animal species" tabindex="0" type="text" class="validate" #species>
    </div>
    <div class="input-field" >
     <input  placeholder="Age" aria-label="Add animal age" tabindex="0" type="number" min="0" class="validate" #age>
    </div>
    <div class="input-field" >
     <input  placeholder="Diet" aria-label="Add animal diet"tabindex="0" type="text" class="validate" #diet>
    </div>
    <div class="input-field" >
     <input  placeholder="Animal Home" aria-label="Add animal home" tabindex="0" type="text" class="validate" #location>
    </div>
    <div class="input-field" >
     <input  placeholder="Number of Caretakers" aria-label="Add number of caretakers" tabindex="0" type="number" class="validate" min="0" #caretakers>
    </div>
    <div class="input-field" >
     <input  placeholder="Likes" aria-label="Add animal likes" tabindex="0" type="text" class="validate" #likes>
    </div>
    <div class="input-field" >
     <input  placeholder="Dislikes" aria-label="Add animal dislikes" tabindex="0"  type="text" class="validate" #dislikes>
    </div>
    <div class="input-field" >
     <input  placeholder="Sex"  aria-label="Add animal sex" tabindex="0" type="text" class="validate" #sex>
    </div>
    <div class="input-field" >
     <input  value="http://www.supercoloring.com/sites/default/files/silhouettes/2015/07/sea-monster-grey-silhouette.svg"  tabindex="0" type="text" class="validate" #imageUrl>
    </div>
    <button class="btn btn-large"  (click)="addNewAnimal(name.value, species.value, age.value, diet.value, location.value, caretakers.value, likes.value, dislikes.value, sex.value, imageUrl.value); closeSideNav()" tabindex="0" [attr.aria-label]="'Submit Form For New Animal'">Submit</button>
    <button class="btn btn-large"  (click)="closeSideNav()" tabindex="0" [attr.aria-label]="'Close Form'">Close</button>
  </md-card>

  `
})

export class AddAnimalsComponent {
@Output () newAnimalSender = new EventEmitter();
@Output () sideNavCloseSender = new EventEmitter();

addNewAnimal(species: string, name: string, age: string, diet: string, location: string, caretakers: string, likes: string, dislikes: string, sex: string, imageUrl:string )  {

  var newAnimal = new Animal (species, name, parseInt(age), diet, location, parseInt(caretakers),  sex, likes, dislikes,imageUrl);
  this.newAnimalSender.emit(newAnimal);
}

closeSideNav(){
  this.sideNavCloseSender.emit();
}

}
