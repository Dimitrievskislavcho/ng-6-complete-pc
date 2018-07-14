import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '../../../node_modules/@angular/router';

@Injectable()
export class AuthService {
token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    return firebase
    .auth()
    .signInWithEmailAndPassword(
      email,
      password
    )
    .then(res => firebase.auth().currentUser.getIdToken())
    .then((token: string) => this.token = token)
    .then(() => this.router.navigate(['/recipes']))
    .catch(e => console.log(e));
  }

  signoutUser() {
    firebase
      .auth()
      .signOut()
      .then(() => this.router.navigate(['/signin']));

    this.token = null;
  }

  getToken() {
    firebase
      .auth()
      .currentUser
      .getIdToken()
      .then((token: string) => this.token = token);

    return this.token;
  }

  isAuthenticated() {
    return !!this.token;
  }
}
