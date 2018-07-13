import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ingredient } from './ingredient.model';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownDirective } from '../shared/dropdown.directive';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '../../../node_modules/@angular/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    DropdownDirective,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [DropdownDirective]
})
export class SharedModule { }

export { Ingredient };
