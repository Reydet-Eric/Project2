
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {
  title = 'testprojet';
  titre1 : any;
  reponse : any;
  meals: any;
 searchText : any;
//   hero = [
// {id :"123",name :" alioune" , age : 31},
// {id :"1234",name :" marie" , age : 32},
// {id :"321",name :" awa" , age : 35},
// {id :"231",name :" penda" , age : 40}

//   ]

date : any;
junary : any;

  URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s&count=20';
  URL = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=15&apiKey=0c18793ad48c47959809d7f8978e8f0b'
  constructor (public http: HttpClient,  ){

    // this.titre1 = this.reponse[0].name


  }

  ngOnInit(): void {
    this.http.get<any>(this.URL2).subscribe(responseObj => {
      console.log(responseObj.meals, "response");
      this.meals = responseObj.meals;
    });
   
  }

  // affiche(){
  //   console.log(this.reponse.meals[0].strMeal);
  //   // this.titre1 = this.reponse[0].title;
  // }

}
