import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule,  } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [CoreModule, ShoppingListModule, RecipesModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
