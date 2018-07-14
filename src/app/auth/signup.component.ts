import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('registerForm') signupForm: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp() {
    this.authService.signupUser(
      this.signupForm.value.email,
      this.signupForm.value.password
    );
  }

}
