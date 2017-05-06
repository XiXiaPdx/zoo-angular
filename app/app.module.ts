
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {FilteredAnimalsComponent} from './filteredAnimals.component';
import {FilteringToolComponent} from './filteringTool.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MaterialModule.forRoot(),
],
  declarations: [ AppComponent, FilteredAnimalsComponent, FilteringToolComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
