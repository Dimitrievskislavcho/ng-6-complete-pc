import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | null = null;

  constructor() { }

  ngOnInit() {
  }

  showDetails($event: { selectedRecipe: Recipe | null }) {
    this.selectedRecipe = $event.selectedRecipe;
  }
}
