import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() selectedRecipe: Recipe | null;

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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

  onRecipeDelete() {
    this.recipesService.deleteRecipe(+this.activatedRoute.snapshot.params['id']);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
