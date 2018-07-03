import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  route = 'recipes';

  constructor() {}

  //  ui mehtods
  setRoute($event: { routeName: string }) {
    this.route = $event.routeName;
  }

  //  hooks
  ngOnInit() {}
}
