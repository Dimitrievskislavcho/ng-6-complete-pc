import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SignupComponent, SigninComponent],
  providers: [AuthService, AuthGuardService]
})
export class AuthModule { }
