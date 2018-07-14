import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm } from '../../../node_modules/@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('signinForm') loginForm: NgForm;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSignIn() {
    this.authService.signinUser(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }
}
