import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/shared.module';

@Injectable()
export class ShoppingListService {
  public ingredientRefresher: EventEmitter<void> = new EventEmitter<void>();

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
    this.ingredientRefresher.emit();
  }
  addIngredientsToShoppingList(ingredients: Array<Ingredient>) {
    this.ingredients.push(...ingredients);
    this.ingredientRefresher.emit();
  }
}
