import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/shared.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  public selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Array<Recipe> = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesomeseome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://static.businessinsider.com/image/5319ea31eab8eaf053655101/image.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Array<Recipe> {
    return this.recipes.slice();
  }
  addToShoppingList(ingredients: Array<Ingredient>) {
    this.shoppingListService.addIngredientsToShoppingList(ingredients);
  }
}
