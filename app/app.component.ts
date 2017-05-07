import { Component, Input, Output, EventEmitter, AfterViewInit, OnInit} from '@angular/core';
import {Animal} from './Animal.model';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  template: `
  <md-sidenav-container class="add-animal">
  <md-sidenav #sidenav class="example-sidenav" mode="over">
  <add-animal *ngIf="addAnimal" (newAnimalSender)="addNewAnimal($event)" (sideNavCloseSender)="sidenav.close()"></add-animal>
  <edit-animal *ngIf="editAnimal" [editThisAnimal] = "selectedEditAnimal" (closeSideNavSender)="sidenav.close()" (updateAnimalSender)="updateAnimal($event)"></edit-animal>
  </md-sidenav>
  <div class="row" id="titleHeader">
    <h1 tabindex="0"> Zoo of Mythical Creatures </h1>
        <button class="btn" (click)="openAddAnimalForm(); sidenav.open()"  tabindex="0" aria-label="Add New Animal"> Add New Animal</button>
  </div>

  <div class="row">
    <div class="col s9  scale-transition {{scale}}">
    <filtered-animals  [filteredAnimalList]="masterAnimalList|filterByAge:age:youngerOlder" (editAnimalSender)="openEditAnimalForm($event); sidenav.open()"></filtered-animals>
    </div>
    <div class="col s3" id="filterColumn">
      <filter-tool (filterSender)="filterMasterList($event)"></filter-tool>
    </div>
  </div>
  </md-sidenav-container>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal ("Black Dragon", "Smaug", 3000, "dwarves", "Lonely Mountain", 0, "male","shiny things","hobbits", "https://1.bp.blogspot.com/-OeNMCDVwzrU/WG6VNBkc8eI/AAAAAAAABSc/LuTBBHy71rwbWBykiW7PSvmUoHcACx2vgCLcB/s1600/Smaug_Hobbit_Film_3.png"),
    new Animal ("Fairy", "Tinker Bell", 10000, "giggles", "NeverLand", 7, "female","pixie  dust","seriousness", "https://i0.wp.com/disneyexaminer.com/wp-content/uploads/2015/09/disney-tinker-bell.jpg?fit=1200%2C750"),
    new Animal ("Giant Ape", "King Kong", 400, "people", "Skull Island", 100, "male","blondes","shackles","http://assets1.ignimgs.com/2014/07/26/1280-kongjpg-0d20ee_1280w.jpg"),
    new Animal ("Rabbit", "Lt. Judy Hopps", 4, "carrots", "Zootopia", 2, "female","doing the right thing","crime", "https://www.imore.com/sites/imore.com/files/styles/larger/public/field/image/2016/06/zootopia.jpg?itok=JYHDgbvL")
  ];

editAnimal: boolean = false;
addAnimal: boolean = false;
scale:string;
indexOfEditAnimal: number;
selectedEditAnimal: Animal []=null ;
age:string="all";
youngerOlder:string;

openAddAnimalForm(){
  this.editAnimal = false;
  this.addAnimal = true;
}

openEditAnimalForm(updatePackage){
  this.editAnimal = true;
  this.addAnimal = false;
  this.indexOfEditAnimal = updatePackage[0];
  this.selectedEditAnimal = updatePackage[1];
}

filterMasterList (filterPackage){
  this.youngerOlder = filterPackage [1];
  this.age = filterPackage[0];
  var self=this;
  var appear = function(){
    self.scale="scale-in";
  }
  var disappear = function () {
    return new Promise (function(resolve,reject){
      self.scale="scale-out";
          resolve();
          reject();
        });
  }
  disappear().then(function(){
    setTimeout(function(){
      appear();
    }, 500);
  });
}

addNewAnimal(animal){
  this.masterAnimalList.unshift(animal);
  var self=this;
  var appear = function(){
    self.scale="scale-in";
  }
  var disappear = function () {
    return new Promise (function(resolve,reject){
      self.scale="scale-out";
          resolve();
          reject();
        });
  }
  disappear().then(function(){
    setTimeout(function(){
      appear();
    }, 500);
  });
}

updateAnimal (updateThisAnimal){
  this.masterAnimalList[this.indexOfEditAnimal]=updateThisAnimal;

  var self=this;
  var appear = function(){
    self.scale="scale-in";
  }
  var disappear = function () {
    return new Promise (function(resolve,reject){
      self.scale="scale-out";
          resolve();
          reject();
        });
  }
  disappear().then(function(){
    setTimeout(function(){
      appear();
    }, 500);
  });
}
   ngOnInit (){
     var min = Math.ceil(0);
  var max = Math.floor(this.masterAnimalList.length);
  var index = Math.floor(Math.random() * (max - min)) + min;

   }

}
