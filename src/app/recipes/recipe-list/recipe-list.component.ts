import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<{ selectedRecipe: Recipe }>();

  recipes: Array<Recipe> = [
    new Recipe(
      'Test recipe 1',
      'Test description 1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-iVoKllDoYP3F0XVvxiBYrhY65_i81FXI5QUOWp71he3zVoi'
    ),
    new Recipe(
      'Test recipe 2',
      'Test description 2',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(selectedRecipe: Recipe) {
    this.recipeSelected.emit({selectedRecipe});
  }

}
