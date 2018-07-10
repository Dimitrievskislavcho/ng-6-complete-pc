import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from './recipes.service';
import { ActivatedRoute, Params } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (!params['id']) {
        this.selectedRecipe = null;
      }
    });
  }
}
