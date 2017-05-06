import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './Animal.model';


@Component({
  selector: 'edit-animal',
  template: `
  <md-card id="editAnimalForm">
    <md-card-title>	Edit Animal Details</md-card-title>
    <div class="input-field" >
     <input  value={{editThisAnimal.name}}  type="text" class="validate" #name>
    </div>
    <div class="input-field" >
     <input  value = "{{editThisAnimal.species}}"  type="text" class="validate" #species>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.age}}" type="number" class="validate" #age>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.diet}}" type="text" class="validate" #diet>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.location}}"  type="text" class="validate" #location>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.caretakers}}"  type="number" class="validate" #caretakers>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.likes}}"  type="text" class="validate" #likes>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.dislikes}}"  type="text" class="validate" #dislikes>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.sex}}" type="text" class="validate" #sex>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.imageUrl}}" type="text" class="validate" #imageUrl>
    </div>
<button class="btn btn-large"  tabindex="0" (click)="updateAnimal(name.value, species.value, age.value, diet.value, location.value, caretakers.value, likes.value, dislikes.value, sex.value, imageUrl.value); closeSideNav()">Update Animal </button>
<button class="btn btn-large"  (click)="closeSideNav()" tabindex="0"> Hide </button>  </md-card>

  `
})

export class EditAnimalComponent {
@Output () closeSideNavSender = new EventEmitter;
@Input () editThisAnimal: Animal;
@Output () updateAnimalSender = new EventEmitter;

closeSideNav(){
  this.closeSideNavSender.emit();
}

updateAnimal(species: string, name: string, age: string, diet: string, location: string, caretakers: string, likes: string, dislikes: string, sex: string, imageUrl:string )  {

  var updatedAnimal = new Animal (name, species, parseInt(age), diet, location, parseInt(caretakers), sex, likes, dislikes,  imageUrl);
  this.updateAnimalSender.emit(updatedAnimal);
}
}
