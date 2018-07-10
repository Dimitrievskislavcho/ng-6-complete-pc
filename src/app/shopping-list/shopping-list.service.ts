import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/shared.module';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {
  public ingredientRefresher = new Subject<any>();

  private ingredients: Array<any> = [
    new Ingredient('apples', 4),
    new Ingredient('tomatoes', 10)
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientRefresher.next();
  }
  addIngredientsToShoppingList(ingredients: Array<Ingredient>) {
    this.ingredients.push(...ingredients);
    this.ingredientRefresher.next();
  }
}
