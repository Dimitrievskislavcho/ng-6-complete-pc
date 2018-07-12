import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/shared.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from '../../../node_modules/rxjs';

@Injectable()
export class RecipesService {
  public onRecipesRefresh: Subject<any> = new Subject<any>();

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
  getRecipe(id: number): Recipe | null {
    return this.recipes[id] || null;
  }
  addToShoppingList(ingredients: Array<Ingredient>) {
    this.shoppingListService.addIngredientsToShoppingList(ingredients);
  }
  updateRecipe(id: number, updatedRecipe: Recipe) {
    this.recipes[id] = updatedRecipe;
    this.onRecipesRefresh.next();
  }
  addNewRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.onRecipesRefresh.next();
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.onRecipesRefresh.next();
  }
}
