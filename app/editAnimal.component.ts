import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './Animal.model';


@Component({
  selector: 'edit-animal',
  template: `
  <md-card id="editAnimalForm">
    <md-card-title>	Edit Animal Details</md-card-title>
    <div class="input-field" >
     <input  placeholder="Animal Name" id="name" type="text" class="validate" #name>
    </div>
    <div class="input-field" >
     <input  placeholder = "Animal Species" id="species" type="text" class="validate" #species>
    </div>
    <div class="input-field" >
     <input  placeholder="Age" id="age" type="text" class="validate" #age>
    </div>
    <div class="input-field" >
     <input  placeholder="Diet" id="diet" type="text" class="validate" #diet>
    </div>
    <div class="input-field" >
     <input  placeholder="Animal Home" id="location" type="text" class="validate" #location>
    </div>
    <div class="input-field" >
     <input  placeholder="Number of Caretakers" id="caretakers" type="text" class="validate" #caretakers>
    </div>
    <div class="input-field" >
     <input  placeholder="Likes" id="likes" type="text" class="validate" #likes>
    </div>
    <div class="input-field" >
     <input  placeholder="Dislikes" id="dislikes" type="text" class="validate" #dislikes>
    </div>
    <div class="input-field" >
     <input  placeholder="Sex" id="sex" type="text" class="validate" #sex>
    </div>
    <div class="input-field" >
     <input  placeholder="ImageUrl" id="imageUrl" type="text" class="validate" #imageUrl>
    </div>
<button class="btn btn-large"  tabindex="0">Update Animal</button>
<button class="btn btn-large"  tabindex="0"> Hide </button>  </md-card>

  `
})

export class EditAnimalComponent {}
