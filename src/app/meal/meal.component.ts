import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicerecetteService } from '../servicerecette.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})

export class MealComponent {}

// repas:any;
// meal!: any;
// mealId:any ;

// meals: any = [];
// strMeal: any;


// strMeasure1: any;
// strMeasure2: any;
// strMeasure3: any;
// strMeasure4: any;
// strMeasure5: any;
// strMeasure6: any;
// strMeasure7: any;
// strMeasure8: any;
// strMeasure9: any;
// strMeasure10: any;
// strMeasure11: any;
// strMeasure12: any;
// strMeasure14: any;
// strMeasure15: any;
// strMeasure16: any;
// strMeasure17: any;
// strMeasure18: any;
// strMeasure19: any;
// strMeasure20: any;

// strInstructions: any;
// strIngredient1: any;
// strIngredient2: any;
// strIngredient3: any;
// strIngredient4: any;
// strIngredient5: any;
// strIngredient6: any;
// strIngredient7: any;
// strIngredient8: any;
// strIngredient9: any;
// strIngredient10: any;
// strIngredient11: any;
// strIngredient12: any;
// strIngredient13: any;
// strIngredient14: any;
// strIngredient15: any;
// strIngredient16: any;
// strIngredient17: any;
// strIngredient18: any;
// strIngredient19: any;
// strIngredient20: any;



// URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s&count=20';

// constructor(private activatedRoute: ActivatedRoute,private service: ServicerecetteService,public http: HttpClient){}


// ngOnInit(): void {
//  this.mealId= this.activatedRoute.snapshot.params['idMeal'];
// // this.meal= this.service.touterecette.find((x: any) => x.idMeal === this.mealId);
// console.log("alioune ", this.mealId);
// fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.mealId}`)
// .then(data => data.json())
//   .then(mealFromAPI => { // { meals: [ {strMeal: "corba"} ] }
//     const { meals } = mealFromAPI; // [ {strMeal: "corba"} ]
//     console.log("&&&&&&", meals[0]); // {strMeal: "corba"} 
//     this.meal = meals[0];
//     // this.meal = mealFromAPI.meals[0]: Ceci est l'équivalent de la déconstruction plus haut
//   });

// console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&", this.service.touterecette)
// this.service.getPost().subscribe((recipe)=> recipe.meals.idMeal === this.mealId){
  
//  this.meal = recipe.meals.idMeal
//  console.log(this.meal)
// })



