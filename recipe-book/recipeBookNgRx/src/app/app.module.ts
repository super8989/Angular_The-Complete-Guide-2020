import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';
import { authReducer } from './auth/store/auth.reducer';
import * as fromApp from './store/app.reducer';

import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RecipeEffects } from './recipes/store/recipe.effects';

// import { AuthComponent } from './auth/auth.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AlertComponent } from './shared/alert/alert.component';
// import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
// import { DropdownDirective } from './shared/dropdown.directive';
// import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';

// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

// import { RecipeService } from './recipes/recipe.service';
// import { ShoppingListService } from './shopping-list/shopping-list.service';
// import { AuthInterceptorService } from './auth/auth-interceptor.service';

// import { RecipesModule } from './recipes/recipes.module';
// import { AuthModule } from './auth/auth.module';
// import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    // Moved to auth.module.ts
    // AuthComponent,

    // Moved to shared.module.ts
    // AlertComponent,
    // LoadingSpinnerComponent,
    // DropdownDirective,
    // PlaceholderDirective,

    // Moved to shopping-list.module.ts
    // ShoppingListComponent,
    // ShoppingEditComponent,

    // Moved to recipes.module.ts
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
    // RecipeStartComponent,
    // RecipeEditComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,

    StoreModule.forRoot(fromApp.appReducer),
    // Merged into appReducer
    // StoreModule.forRoot({
    //   shoppingList: shoppingListReducer,
    //   auth: authReducer,
    // }),

    EffectsModule.forRoot([AuthEffects, RecipeEffects]),
    StoreRouterConnectingModule.forRoot(),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

    // Being loaded lazyily so cannot be loaded in here
    // RecipesModule,
    // ShoppingListModule,
    // AuthModule,

    // Moved to modules where needed:  auth.module, shopping-list.module...
    // FormsModule,

    // Moved to modules where needed: recipes.module.ts...
    // ReactiveFormsModule,
  ],
  // Moved to core.module.ts
  // providers: [
  //   ShoppingListService,
  //   RecipeService,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptorService,
  //     multi: true,
  //   },
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
