import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicerecetteService } from '../servicerecette.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit{
repas:any;
meal!: any;
mealId:any ;
URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s&count=20';

constructor(private activatedRoute: ActivatedRoute,private service: ServicerecetteService,public http: HttpClient){}


ngOnInit(): void {
 this.mealId= this.activatedRoute.snapshot.params['idMeal'];
// this.meal= this.service.touterecette.find((x: any) => x.idMeal === this.mealId);
console.log("alioune ", this.mealId);
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.mealId}`)
.then(data => data.json())
  .then(mealFromAPI => { // { meals: [ {strMeal: "corba"} ] }
    const { meals } = mealFromAPI; // [ {strMeal: "corba"} ]
    console.log("&&&&&&", meals[0]); // {strMeal: "corba"} 
    this.meal = meals[0];
    // this.meal = mealFromAPI.meals[0]: Ceci est l'équivalent de la déconstruction plus haut
  });

// console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&", this.service.touterecette)
// this.service.getPost().subscribe((recipe)=> recipe.meals.idMeal === this.mealId){
  
//  this.meal = recipe.meals.idMeal
//  console.log(this.meal)
// })
}}
