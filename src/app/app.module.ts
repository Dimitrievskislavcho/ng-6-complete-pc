import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [CoreModule, ShoppingListModule, RecipesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
