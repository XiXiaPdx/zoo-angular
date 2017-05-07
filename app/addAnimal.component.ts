import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './Animal.model';


@Component({
  selector: 'add-animal',
  template: `
  <form>
  <md-card id="addAnimalForm">
    <md-card-title>	 New Animal Details  </md-card-title>
    <div class="input-field" >
     <input  placeholder="Animal Name" id="name" type="text" class="validate" #name>
    </div>
    <div class="input-field" >
     <input  placeholder = "Animal Species"  type="text" class="validate" #species>
    </div>
    <div class="input-field" >
     <input  placeholder="Age" type="number" min="0" class="validate" #age>
    </div>
    <div class="input-field" >
     <input  placeholder="Diet"  type="text" class="validate" #diet>
    </div>
    <div class="input-field" >
     <input  placeholder="Animal Home"  type="text" class="validate" #location>
    </div>
    <div class="input-field" >
     <input  placeholder="Number of Caretakers"  type="number" class="validate" min="0" #caretakers>
    </div>
    <div class="input-field" >
     <input  placeholder="Likes"  type="text" class="validate" #likes>
    </div>
    <div class="input-field" >
     <input  placeholder="Dislikes"  type="text" class="validate" #dislikes>
    </div>
    <div class="input-field" >
     <input  placeholder="Sex"  type="text" class="validate" #sex>
    </div>
    <div class="input-field" >
     <input  value="http://www.supercoloring.com/sites/default/files/silhouettes/2015/07/sea-monster-grey-silhouette.svg"  type="text" class="validate" #imageUrl>
    </div>
<button class="btn btn-large"  (click)="addNewAnimal(name.value, species.value, age.value, diet.value, location.value, caretakers.value, likes.value, dislikes.value, sex.value, imageUrl.value); closeSideNav()" tabindex="0">Submit</button>
<button class="btn btn-large"  (click)="closeSideNav()" tabindex="0">Close</button>

  </md-card>
</form>
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
