import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
    CommonModule
  ]
})
export class CoreModule { }
