import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ingredient } from './ingredient.model';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    CommonModule,
    BrowserModule
  ],
  declarations: []
})
export class SharedModule { }

export { Ingredient };
