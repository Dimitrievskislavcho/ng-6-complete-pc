import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
    CommonModule
  ]
})
export class CoreModule { }
