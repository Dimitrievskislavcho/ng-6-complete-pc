import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() selectedRecipe: Recipe | null;

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('asd');
    this.selectedRecipe = this.recipesService.getRecipe(+this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedRecipe = this.recipesService.getRecipe(+params['id']);
    });
  }

  onAddToShoppingList() {
    this.recipesService.addToShoppingList(this.selectedRecipe.ingredients);
  }

}
