import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ingredient } from './ingredient.model';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownDirective } from '../shared/dropdown.directive';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    DropdownDirective,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DropdownDirective]
})
export class SharedModule { }

export { Ingredient };
