import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEmptyComponent } from './recipes/recipe-empty/recipe-empty.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup.component';
import { SigninComponent } from './auth/signin.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeEmptyComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
    {path: ':id', component: RecipeDetailsComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}
  ] as Routes},
  {path: 'shopping-list', component: ShoppingListComponent}
  , {path: 'signup', component: SignupComponent}
  , {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
