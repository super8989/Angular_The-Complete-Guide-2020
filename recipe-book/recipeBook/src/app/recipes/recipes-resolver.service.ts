import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  // resolver subscribes automatically
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('resolver running');

    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      console.log('resolver fetching recipes');
      return this.dataStorageService.fetchRecipes();
    } else {
      console.log('resolver not fetching recipes');
      return recipes;
    }
  }
}
