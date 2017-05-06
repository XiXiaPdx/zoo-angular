
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {FilteredAnimalsComponent} from './filteredAnimals.component';
import {FilteringToolComponent} from './filteringTool.component';
import {AddAnimalsComponent} from './addAnimal.component';
import {EditAnimalComponent} from './editAnimal.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MaterialModule.forRoot(),
],
  declarations: [ AppComponent, FilteredAnimalsComponent, FilteringToolComponent, AddAnimalsComponent, EditAnimalComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
