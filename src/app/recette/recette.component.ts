
import { Component, OnInit, Input} from '@angular/core';
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

  // INPUT POUR TRANSMETTRE l'information de la liste de légume ) la barre de recherche  --
  @Input()
 public searchText! : string;



//  api alimentaire choisi ----

  URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s&count=20';
  constructor (public http: HttpClient,  ){



  }
//  méthode pour récupérer l'API ----

  ngOnInit(): void {
    this.http.get<any>(this.URL2).subscribe(responseObj => {
      console.log(responseObj.meals, "response");
      this.meals = responseObj.meals;
    });
   
    
    

  }
  

  
// méthode test pour voir si l'api fonctionne ( la fonction n'est pas utilisé dans lapplication )
  affiche(){
    console.log(this.reponse.meals[0].strMeal);
    // this.titre1 = this.reponse[0].title;
  }

}
