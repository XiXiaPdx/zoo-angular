import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './Animal.model';


@Component({
  selector: 'edit-animal',
  template: `
  <md-card id="editAnimalForm">
  <md-card-title tabindex="0" aria-label="Update Animal Details Form">	 Update Animal Details  </md-card-title>
  <form ngNativeValidate #form="ngForm" (ngSubmit)="submitForm(form.value); this.form.reset(); closeSideNav()">

  <div class="row">
    <div class="col s6">
      <div class="input-field" >
      <label class="active ">Animal Name</label>
       <input  aria-label="Add animal name"  tabindex="0" type="text" name="name" [(ngModel)]="editThisAnimal.name" required>
      </div>
    </div>
    <div class="col s6">
      <div class="input-field" >
      <label class="active ">Animal Species</label>
       <input aria-label="Add animal species" tabindex="0" type="text" name="species" [(ngModel)]="editThisAnimal.species" required>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col s6">
      <div class="input-field" >
      <label class="active ">Animal Home</label>
       <input  aria-label="Add animal home" tabindex="0" type="text" [(ngModel)]="editThisAnimal.location" name="location" required>
      </div>
    </div>
    <div class="col s6">
      <div class="input-field" >
      <label class="active ">Animal Diet</label>
       <input  aria-label="Add animal diet" tabindex="0" type="text" [(ngModel)]="editThisAnimal.diet" name="diet" required>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col s6">
      <div class="input-field" >
      <label class="active ">Animal Age</label>
       <input  aria-label="Add animal age" tabindex="0" type="number" min="0" name="age" [(ngModel)]="editThisAnimal.age" required>
      </div>
    </div>
    <div class="col s6">
    <div class="input-field" >
    <label class="active "># of Caretakers</label>
       <input   aria-label="Add number of caretakers" tabindex="0" type="number" min="0" [(ngModel)]="editThisAnimal.caretakers" name="caretakers" required>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col s6">
      <div class="input-field" >
      <label class="active ">Animal Likes</label>
         <input   aria-label="Add animal likes" tabindex="0" type="text" [(ngModel)]="editThisAnimal.likes" name="likes" required>
      </div>
    </div>
    <div class="col s6">
      <div class="input-field" >
        <div class="input-field" >
        <label class="active ">Animal Dislikes</label>
         <input   aria-label="Add animal dislikes" tabindex="0"  type="text"  [(ngModel)]="editThisAnimal.dislikes" name="dislikes" required>
        </div>
      </div>
    </div>
  </div>
  <div class="sexRadio">
    <md-radio-group tabindex="0" [(ngModel)]="editThisAnimal.sex" name="sex" required >
       <md-radio-button value="male">Male</md-radio-button>
       <md-radio-button value="female">Female </md-radio-button>
       <md-radio-button value="non-binary">Non-binary </md-radio-button>
     </md-radio-group>
  </div>
  <div class="input-field" >
    <label class="active"> Image URL - Optional</label>
     <input    tabindex="0" type="text" [(ngModel)]="editThisAnimal.imageUrl" name="imageUrl" aria-label="Add image URL for animal">
  </div>
    <button type="submit" class="btn btn-large" tabindex="0" [attr.aria-label]="'Update Animal Submit Button'">Update</button>
    <button type="button" class="btn btn-large"  (click)="closeSideNav();false" tabindex="0" [attr.aria-label]="'Close Form'">Close</button>
  </form>
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

submitForm(form: any): void{
  var updatedAnimal = new Animal (form.species, form.name, parseInt(form.age), form.diet, form.location, parseInt(form.caretakers),  form.sex, form.likes, form.dislikes,form.imageUrl);
  this.updateAnimalSender.emit(updatedAnimal);  }
}
