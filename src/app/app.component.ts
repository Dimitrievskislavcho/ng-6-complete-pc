import { Component, OnInit } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  route = 'recipes';

  constructor(private router: Router) {}

  //  ui mehtods

  //  hooks
  ngOnInit() {
    firebase.initializeApp({
        apiKey: 'AIzaSyBmd4ACjTtcam_S1rh9qS-LHqHnn9l002w',
        authDomain: 'ng-6-complete.firebaseapp.com',
    });
  }
}
