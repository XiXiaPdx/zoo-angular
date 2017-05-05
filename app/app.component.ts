import { Component, AfterViewInit } from '@angular/core';
import {Animal} from './Animal.model';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  template: `
  <md-sidenav-container class="add-animal">
  <md-sidenav #sidenav class="example-sidenav" mode="push">
  <h1> stuff</h1>
  </md-sidenav>
  <button md-button (click)="sidenav.open()" id="addKegButton"> Add New Animal</button>
  <div class="row">
    <div class="col s10">
    <ul class="collapsible" data-collapsible="accordion">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>

    </div>
    <div class="col s2">
    </div>
  </div>
  </md-sidenav-container>

  `
})

export class AppComponent {

  ngAfterViewInit() {
     jQuery('.collapsible').collapsible();
   }

  masterAnimalList: Animal[] = [

  ];
}
