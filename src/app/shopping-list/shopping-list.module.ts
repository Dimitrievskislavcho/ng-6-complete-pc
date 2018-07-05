import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListService } from './shopping-list.service';

@NgModule({
  imports: [SharedModule],
  exports: [ShoppingListComponent],
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  providers: [ShoppingListService]
})
export class ShoppingListModule {}
