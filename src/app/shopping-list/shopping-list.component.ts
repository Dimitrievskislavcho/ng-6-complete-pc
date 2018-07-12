import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/shared.module';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public ingredientsRefreshSubscription: Subscription;
  public ingredients: Array<Ingredient> = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsRefreshSubscription =
      this.shoppingListService.ingredientRefresher.subscribe(
        () => this.ingredients = this.shoppingListService.getIngredients()
      );
  }

  ngOnDestroy() {
    this.ingredientsRefreshSubscription.unsubscribe();
  }

  editIngredient(index) {
    this.shoppingListService.startedEditing.next(index);
  }

}
