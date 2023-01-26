import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicerecetteService {

// variable declarée //
season: Array<any> = [
  {name:"eggplant",mois:[5,6,7,8,9],clipart:"../assets/cliparts/eggplant-clipart.svg"},
  {name:"cauliflower",mois:[3,4,5,6,7,8,9,10,11],clipart:"../assets/cliparts/cauliflower-clipart.svg"},
  {name:"mushrooms",mois:[1,2,3,4,5,6,7,8,9,10,11,12],clipart:"../assets/cliparts/mushrooms-clipart.svg"},
  {name:"chinese_cabbage",mois:[1,2,3,8,9,10,11,12],clipart:"../assets/cliparts/chinese-cabbage-clipart.svg"},
  {name:"collard",mois:[1,2,11,12],clipart:"../assets/cliparts/collard-clipart.jpg"},
  {name:"potatoes",mois:[1,2,3,4,5,6,7,8,9,10,11,12],clipart:"../assets/cliparts/potatoes-clipart.svg"},
  {name:"carrots",mois:[1,2,3,4,5,6,7,8,9,10,11,12],clipart:"../assets/cliparts/carrot-clipart.svg"},
  {name:"brussels_sprouts",mois:[1,2,10,11,12],clipart:"../assets/cliparts/brussel-sprouts-clipart.svg"},
  {name:"beetroot",mois:[1,2,3,9,10,11,12],clipart:"../assets/cliparts/beetroot-clipart.svg"},
  {name:"red_cabbage",mois:[1,2,3,9,10,11,12],clipart:"../assets/cliparts/red-cabbage-clipart.svg"},
  {name:"celeriac",mois:[1,2,3,9,10,11,12],clipart:"../assets/cliparts/celery-clipart.svg"},
  {name:"asparagus",mois:[4,5,6],clipart:"../assets/cliparts/asparagus-clipart.svg"},
  {name:"spinach",mois:[3,4,5,6,9,10],clipart:"../assets/cliparts/spinach-clipart.svg"},
  {name:"tomatoes",mois:[4,5,6,7,8,9,10,11],clipart:"../assets/cliparts/tomato-clipart.svg"},
  {name:"onions",mois:[1,2,3,4,5,6,7,8,9,10,11,12],clipart:"../assets/cliparts/onion-clipart.svg"},
  {name:"apple",mois:[1,2,3,4,8,9,10,11,12],clipart:"../assets/cliparts/apple-clipart.svg"},
  {name:"strawberries",mois:[5,6,7,8],clipart:"../assets/cliparts/strawberries-clipart.svg"},
  {name:"raspberries",mois:[6,7,8,9],clipart:"../assets/cliparts/raspberry-clipart.svg"},
  {name:"rhubarb",mois:[4,5,6],clipart:"../assets/cliparts/rhubarb-clipart.svg"}
  ]




// URL DE L'API //
  URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s&count=20';
  constructor (public http: HttpClient,  ){



  }

 getPost(){
    return  this.http.get<any>(this.URL2);

    // subscribe(responseObjj => {
    //   console.log(responseObjj.meals, "response");
    //   this.mealss = responseObjj.meals;
    };

getSeason(){
  return this.season
}


  }





