import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes/recipes.service';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private recipesService: RecipesService,
    private authService: AuthService
  ) { }

  //  ui methods

  //  hooks
  ngOnInit() {
  }
  onSaveRecipes() {
    this
      .recipesService
      .saveRecipes()
      .subscribe((res) => console.log(res));
  }
  onFetchRecipes() {
    this
      .recipesService
      .fetchRecipes();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.signoutUser();
  }
}
