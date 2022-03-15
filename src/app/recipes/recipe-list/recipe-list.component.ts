import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe Name',
      'This is the Test Description',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png'
    ),
    new Recipe(
      'A Test Recipe Name2',
      'This is the Test Description2',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
