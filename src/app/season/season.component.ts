import { Component } from '@angular/core';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent {

  //tableau d'objets pour référencer les fruits et légumes de saisons.
  // forme : [{name: "",mois: [1,2,3,...],isChecked: boolean (utiliser pour les check-boxs)}]
  season = [
    {name:"eggplant",mois:[5,6,7,8,9],isChecked:false},
    {name:"cauliflower",mois:[3,4,5,6,7,8,9,10,11],isChecked:false},
    {name:"mushrooms",mois:[1,2,3,4,5,6,7,8,9,10,11,12],isChecked:false},
    {name:"endive",mois:[1,2,3,4,10,11,12],isChecked:false},
    {name:"chinese cabbage",mois:[1,2,3,8,9,10,11,12],isChecked:false},
    {name:"collard",mois:[1,2,11,12],isChecked:false},
    {name:"potatoes",mois:[1,2,3,4,5,6,7,8,9,10,11,12],isChecked:false},
    {name:"carrots",mois:[1,2,3,4,5,6,7,8,9,10,11,12],isChecked:false},
    {name:"brussels sprouts",mois:[1,2,10,11,12],isChecked:false},
    {name:"beetroot",mois:[1,2,3,9,10,11,12],isChecked:false},
    {name:"red cabbage",mois:[1,2,3,9,10,11,12],isChecked:false},
    {name:"celeriac",mois:[1,2,3,9,10,11,12],isChecked:false},
    {name:"asparagus",mois:[4,5,6],isChecked:false},
    {name:"spinach",mois:[3,4,5,6,9,10],isChecked:false},
    {name:"tomatoes",mois:[4,5,6,7,8,9,10,11],isChecked:false},
    {name:"onions",mois:[1,2,3,4,5,6,7,8,9,10,11,12],isChecked:false},
    {name:"apples",mois:[1,2,3,4,8,9,10,11,12],isChecked:false},
    {name:"strawberries",mois:[5,6,7,8],isChecked:false},
    {name:"raspberries",mois:[6,7,8,9],isChecked:false},
    {name:"rhubarb",mois:[4,5,6],isChecked:false}
    ]
//recupération de la date et extraction du mois actuel
  date= new Date();
  month = this.date.getMonth()+1;

  //variables permettant l'affichage en check-boxs des fruits et legumes
  selectedItemsList:any =[]
  checkedIDs: any =[]

  //veget = filtre donnant un tableau avec les fruits et legumes de saison correspondants au mois actuel
  veget = this.season.filter((fruits => {
    return fruits.mois.includes(this.month);
  }));

  // fonctions a lancer avant le démarrage de la page html
  ngOnInit():void {
    this.fetchSelectedItems()
    this.fetchCheckedIDs()
  }

  //
  changeSelection() {
    this.fetchSelectedItems()
  }

  //on regarde si la case est checkée
  fetchSelectedItems() {
    this.selectedItemsList = this.veget.filter((value, index) => {
      return value.isChecked
    });
  }

  //on recopie le nom si la case est checkée
  fetchCheckedIDs() {
    this.checkedIDs = []
    this.veget.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.name);
      }
    });
  }

}
