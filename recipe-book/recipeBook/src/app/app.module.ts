import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

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
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,

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
