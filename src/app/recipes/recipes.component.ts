import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from './recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | null = null;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.selectedRecipe.subscribe((recipe: Recipe) => this.selectedRecipe = recipe);
  }
}
