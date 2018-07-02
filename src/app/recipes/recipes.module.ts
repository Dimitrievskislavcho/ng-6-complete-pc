import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecipeDetailsComponent, RecipeItemComponent, RecipeListComponent, RecipesComponent],
  exports: [RecipesComponent]
})
export class RecipesModule { }
