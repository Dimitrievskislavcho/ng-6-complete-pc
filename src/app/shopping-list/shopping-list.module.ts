import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';

@NgModule({
  imports: [],
  exports: [ShoppingListComponent],
  declarations: [ShoppingListComponent, ShoppingListEditComponent]
})
export class ShoppingListModule {}
