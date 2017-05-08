import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './Animal.model';


@Component({
  selector: 'add-animal',
  template: `

  <md-card id="addAnimalForm" >
    <md-card-title tabindex="0" aria-label="New Animal Details Form">	 New Animal Details  </md-card-title>
    <form ngNativeValidate #form="ngForm" (ngSubmit)="submitForm(form.value); this.form.reset(); closeSideNav()">

    <div class="row">
      <div class="col s6">
        <div class="input-field" >
         <input  aria-label="Add animal name" placeholder="Animal Name" tabindex="0" type="text" name="name" ngModel required>
        </div>
      </div>
      <div class="col s6">
        <div class="input-field" >
         <input  placeholder = "Animal Species" aria-label="Add animal species" tabindex="0" type="text" name="species" ngModel required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <div class="input-field" >
         <input  placeholder="Animal Home" aria-label="Add animal home" tabindex="0" type="text" ngModel name="location" required>
        </div>
      </div>
      <div class="col s6">
        <div class="input-field" >
         <input  placeholder="Diet" aria-label="Add animal diet"tabindex="0" type="text" ngModel name="diet" required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <div class="input-field" >
         <input  placeholder="Age" aria-label="Add animal age" tabindex="0" type="number" min="0" name="age" ngModel required>
        </div>
      </div>
      <div class="col s6">
      <div class="input-field" >
         <input  placeholder="Number of Caretakers" aria-label="Add number of caretakers" tabindex="0" type="number" min="0" ngModel name="caretakers" required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <div class="input-field" >
           <input  placeholder="Likes" aria-label="Add animal likes" tabindex="0" type="text" ngModel name="likes" required>
        </div>
      </div>
      <div class="col s6">
        <div class="input-field" >
          <div class="input-field" >
           <input  placeholder="Dislikes" aria-label="Add animal dislikes" tabindex="0"  type="text"  ngModel name="dislikes" required>
          </div>
        </div>
      </div>
    </div>
    <div class="sexRadio">
      <md-radio-group tabindex="0" ngModel name="sex" required >
         <md-radio-button value="male">Male</md-radio-button>
         <md-radio-button value="female">Female </md-radio-button>
         <md-radio-button value="non-binary">Non-binary </md-radio-button>
       </md-radio-group>
    </div>
    <div class="input-field" >
      <label class="active"> Image URL - Optional</label>
       <input    tabindex="0" type="text" [(ngModel)]="url" name="imageUrl" aria-label="Add image URL for animal">
    </div>
      <button type="submit" class="btn btn-large" tabindex="0" [attr.aria-label]="'Submit Form For New Animal'">Submit</button>

      <button type="button" class="btn btn-large"  (click)="closeSideNav(); this.form.reset()" tabindex="0" [attr.aria-label]="'Close Form'">Close</button>

    </form>
  </md-card>

  `
})

export class AddAnimalsComponent {
@Output () newAnimalSender = new EventEmitter();
@Output () sideNavCloseSender = new EventEmitter();

url: string="http://www.supercoloring.com/sites/default/files/silhouettes/2015/07/sea-monster-grey-silhouette.svg"

closeSideNav(){
  this.sideNavCloseSender.emit();
}

submitForm(form: any): void{
  var newAnimal = new Animal (form.species, form.name, parseInt(form.age), form.diet, form.location, parseInt(form.caretakers),  form.sex, form.likes, form.dislikes,form.imageUrl);
  this.newAnimalSender.emit(newAnimal);
  }

}
