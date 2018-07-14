import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule,  } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [CoreModule, ShoppingListModule, RecipesModule, SharedModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
