import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { RecipeEmptyComponent } from './recipe-empty/recipe-empty.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesService } from './recipes.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
  ],
  declarations: [
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeEmptyComponent,
    RecipeEditComponent
  ],
  exports: [RecipesComponent],
  providers: [RecipesService]
})
export class RecipesModule { }
