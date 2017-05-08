import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './Animal.model';


@Component({
  selector: 'edit-animal',
  template: `
  <md-card id="editAnimalForm">
    <md-card-title tabindex="0">	Edit Animal Details</md-card-title>
    <div class="input-field" >
     <input  value={{editThisAnimal.name}} tabindex="0" type="text" class="validate" #name>
    </div>
    <div class="input-field" >
     <input  value = "{{editThisAnimal.species}}" tabindex="0" type="text" class="validate" #species>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.age}}" tabindex="0" type="number" class="validate" #age>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.diet}}" tabindex="0" type="text" class="validate" #diet>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.location}}" tabindex="0"  type="text" class="validate" #location>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.caretakers}}" tabindex="0" type="number" class="validate" #caretakers>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.likes}}" tabindex="0" type="text" class="validate" #likes>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.dislikes}}" tabindex="0" type="text" class="validate" #dislikes>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.sex}}" tabindex="0" type="text" class="validate" #sex>
    </div>
    <div class="input-field" >
     <input  value="{{editThisAnimal.imageUrl}}" tabindex="0" type="text" class="validate" #imageUrl>
    </div>
    <button class="btn btn-large"  tabindex="0" (click)="updateAnimal(name.value, species.value, age.value, diet.value, location.value, caretakers.value, likes.value, dislikes.value, sex.value, imageUrl.value); closeSideNav()">Update Animal </button>
    <button class="btn btn-large"  (click)="closeSideNav()" tabindex="0" [attr.aria-label]="'Close Edit Form'"> Close </button>
  </md-card>

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
