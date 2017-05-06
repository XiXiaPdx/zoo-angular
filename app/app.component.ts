import { Component, Input, Output, EventEmitter, AfterViewInit, OnInit} from '@angular/core';
import {Animal} from './Animal.model';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  template: `
  <md-sidenav-container class="add-animal">
  <md-sidenav #sidenav class="example-sidenav" mode="push" tabindex="0">
  <h1> stuff</h1>
  </md-sidenav>
  <div class="row" id="titleHeader">
    <h1 tabindex="0"> Zoo of Mythical Creatures </h1>
  </div>
  <button md-button (click)="sidenav.open()" id="addAnimalButton" tabindex="0"> Add New Animal</button>
    <button class="btn btn-large" (click)="disappear()"   tabindex="0"> Disappear</button>

  <div class="row scale-transition {{scale}}">
    <div class="col s8 offset-s2">
    <div> </div>
    <filtered-animals  [filteredAnimalList]="masterAnimalList"></filtered-animals>
    </div>
    <div class="col s2">
      <filter-tool></filter-tool>
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



 scale:string="scale-out";


disappear(){
  this.scale = "scale-out";
  }

  appear () {
    this.scale = "scale-in";
  }


  ngAfterViewInit() {
     jQuery('.collapsible').collapsible();
     this.scale="scale-in";
   }

   ngOnInit (){
     var min = Math.ceil(0);
  var max = Math.floor(this.masterAnimalList.length);
  var index = Math.floor(Math.random() * (max - min)) + min;
     console.log("when?");

   }


}
