import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicerecetteService {
touterecette : any;
// variable declarée //
season: Array<any> = [
  {name:"eggplant",type:"vegetable",mois:[5,6,7,8,9],clipart:"../assets/cliparts/eggplant-clipart.svg",bonus:"Eggplant has antioxidants like vitamins A and C, which help protect your cells against damage. It's also high in natural plant chemicals called polyphenols, which may help cells do a better job of processing sugar if you have diabetes."},
  {name:"cauliflower",type:"vegetable",mois:[3,4,5,6,7,8,9,10,11],clipart:"../assets/cliparts/cauliflower-clipart.svg",bonus:"Cauliflower  is rich in glucosinolates, substances found in cruciferous vegetables that have a protective role against cancer thanks to their ability to help the liver eliminate toxic substances."},
  {name:"mushrooms",type:"vegetable",mois:[1,2,3,4,5,6,7,8,9,10,11,12],clipart:"../assets/cliparts/mushrooms-clipart.svg",bonus:""},
  {name:"chinese_cabbage",type:"vegetable",mois:[1,2,3,8,9,10,11,12],clipart:"../assets/cliparts/chinese-cabbage-clipart.svg",bonus:""},
  {name:"collard",type:"vegetable",mois:[1,2,11,12],clipart:"../assets/cliparts/collard-clipart.jpg",bonus:""},
  {name:"potatoes",type:"vegetable",mois:[1,2,3,4,5,6,7,8,9,10,11,12],clipart:"../assets/cliparts/potatoes-clipart.svg",bonus:""},
  {name:"carrots",type:"vegetable",mois:[1,2,3,4,5,6,7,8,9,10,11,12],clipart:"../assets/cliparts/carrot-clipart.svg",bonus:"The carrot  is an important source of carotenoids, compounds that give it its beautiful orange color, and which are beneficial for cell protection."},
  {name:"brussels_sprouts",type:"vegetable",mois:[1,2,10,11,12],clipart:"../assets/cliparts/brussel-sprouts-clipart.svg",bonus:"Brussels sprouts  are rich in vitamin C and calcium. Calcium from Brussels sprouts is also very well absorbed by the body."},
  {name:"beetroot",type:"vegetable",mois:[1,2,3,9,10,11,12],clipart:"../assets/cliparts/beetroot-clipart.svg",bonus:""},
  {name:"red_cabbage",type:"vegetable",mois:[1,2,3,9,10,11,12],clipart:"../assets/cliparts/red-cabbage-clipart.svg",bonus:""},
  {name:"celeriac",type:"vegetable",mois:[1,2,3,9,10,11,12],clipart:"../assets/cliparts/celery-clipart.svg",bonus:"Celeriac  has anti-inflammatory properties and plays an action in the prevention of cancer thanks to its flavonoid content."},
  {name:"asparagus",type:"vegetable",mois:[4,5,6],clipart:"../assets/cliparts/asparagus-clipart.svg",bonus:""},
  {name:"spinach",type:"vegetable",mois:[3,4,5,6,9,10],clipart:"../assets/cliparts/spinach-clipart.svg",bonus:"Spinach  is rich in beta-carotene, which has a beneficial effect on eye health. It also has a strong antioxidant power which implies it in the prevention of cancer."},
  {name:"tomatoes",type:"vegetable",mois:[4,5,6,7,8,9,10,11],clipart:"../assets/cliparts/tomato-clipart.svg",bonus:""},
  {name:"onions",type:"vegetable",mois:[1,2,3,4,5,6,7,8,9,10,11,12],clipart:"../assets/cliparts/onion-clipart.svg",bonus:""},
  {name:"apple",type:"fruit",mois:[1,2,3,4,8,9,10,11,12],clipart:"../assets/cliparts/apple-clipart.svg",bonus:"The apple concentrates valuable antioxidants in its peel and is therefore to be chosen organic because it is one of the most processed fruits."},
  {name:"strawberries",type:"fruit",mois:[5,6,7,8],clipart:"../assets/cliparts/strawberries-clipart.svg",bonus:""},
  {name:"raspberries",type:"fruit",mois:[6,7,8,9],clipart:"../assets/cliparts/raspberry-clipart.svg",bonus:""},
  {name:"rhubarb",type:"fruit",mois:[4,5,6],clipart:"../assets/cliparts/rhubarb-clipart.svg",bonus:""},
  {name:"Clementine",type:"fruit",mois:[1,2,3,11,12],clipart:"../assets/cliparts/clémentine-fruit-saison.png",bonus:"Clementine  is very rich in vitamin C, which has an important antioxidant action and thus helps to protect our body from premature aging of cells."},
  {name:"kiwi",type:"fruit",mois:[1,2,3,4,12],clipart:"../assets/cliparts/kiwi-fruit-saison.png",bonus:"The kiwi  is the vitamin C champion: 2 kiwis cover 100% of the daily vitamin C requirements for adults."},
  {name:"pear",type:"fruit",mois:[1,2,3,9,10,11,12],clipart:"../assets/cliparts/poire-fruit-saison-1.png",bonus:"The pear, like the Conférence or the Comice, concentrates valuable antioxidants in its peel. Prefer organic pears because pesticides are also concentrated in the skin."},
  {name:"pomelo",type:"fruit",mois:[4,5,6],clipart:"../assets/cliparts/pomelo-fruit-saison.png",bonus:"The pomelo , commonly called grapefruit wrongly, is rich in vitamin C. Pomelos from Corsica can be found in France."},
  {name:"cherry",type:"fruit",mois:[6,7],clipart:"../assets/cliparts/cerise-fruit-saison-150x150-1.png",bonus:"Cherry is rich in catechins, very beneficial antioxidants that are also found in green tea."},
  {name:"melon",type:"fruit",mois:[6,7,8,9],clipart:"../assets/cliparts/melon-fruit-saison.png",bonus:"Melon is rich in beta-carotene, an antioxidant that gives it its orange color. It also stimulates the production of serotonin, a neurotransmitter responsible for calming."}
  ]
// BONUS  : variable pour un modal avec plus d'infos sur le fruits/legumes selectionnés
bonus: boolean = false


// URL DE L'API //
  URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s&count=20';
  constructor (public http: HttpClient,  ){  }

 getPost(){
    return  this.http.get<any>(this.URL2);
    // this.touterecette = this.http.get<any>(this.URL2);
    // subscribe(responseObjj => {
    //   console.log(responseObjj.meals, "response");
    //   this.mealss = responseObjj.meals;
    };


    setRecette(recettes: any){
      this.touterecette = recettes;
    }

getSeason(){
  return this.season
}
getBonus(){
  return this.bonus
}
getNoBonus(){
  this.bonus=!this.bonus
}
  }





