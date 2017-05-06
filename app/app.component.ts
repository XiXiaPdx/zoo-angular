import { Component, AfterViewInit } from '@angular/core';


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

  <div class="row">
    <div class="col s10">
    <button class="btn btn-large" (click)="disappear()"   tabindex="0"> Disappear</button>
    <button md-button (click)="appear()"  tabindex="0"> Appear</button>

    <img class="materialboxed" width="650" src="" tabindex="0" alt="">
    </div>
    <div class="col s2">

    <h1 class="scale-transition {{onOff}}" id="words" tabindex="0" alt="just words"> words wrods wordsl asfk;l ;kajdf;lsajf ;lsakjf;lsa jfs;aljf </h1>

    </div>
  </div>
  </md-sidenav-container>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal ("Black Dragon", "Smaug", 3000, "dwarves", "Lonely Mountain", 0, "male","shiny things","hobbits", "http://vignette3.wikia.nocookie.net/video151/images/1/16/The_Hobbit_The_Desolation_of_Smaug_-_Bringing_Smaug_to_Life/revision/latest?cb=20140511002303"),
    new Animal ("Fairy", "Tinker Bell", 10000, "giggles", "NeverLand", 7, "female","pixie  dust","seriousness", "https://i0.wp.com/disneyexaminer.com/wp-content/uploads/2015/09/disney-tinker-bell.jpg?fit=1200%2C750"),
    new Animal ("Giant Ape", "King Kong", 400, "people", "Skull Island", 100, "male","blondes","shackles","http://assets1.ignimgs.com/2014/07/26/1280-kongjpg-0d20ee_1280w.jpg"),
    new Animal ("Rabbit", "Lt. Judy Hopps", 4, "carrots", "Zootopia", 2, "female","doing the right thing","crime", "https://www.imore.com/sites/imore.com/files/styles/larger/public/field/image/2016/06/zootopia.jpg?itok=JYHDgbvL")
  ];



 onOff:string;


disappear(){
  this.onOff = "scale-out";
  }

  appear () {
    this.onOff = "scale-in";

  }

  ngAfterViewInit() {
     jQuery('.collapsible').collapsible();
   }


}
