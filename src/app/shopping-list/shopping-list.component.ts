import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/shared.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Array<any> = [
    new Ingredient('apples', 4),
    new Ingredient('tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

}
