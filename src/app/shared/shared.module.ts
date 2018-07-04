import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ingredient } from './ingredient.model';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownDirective } from '../shared/dropdown.directive';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    DropdownDirective
  ],
  declarations: [DropdownDirective]
})
export class SharedModule { }

export { Ingredient };
