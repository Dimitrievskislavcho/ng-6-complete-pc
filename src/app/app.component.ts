import { Component, OnInit } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
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
  ngOnInit() {}
}
