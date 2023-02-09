import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { ServicerecetteService } from '../servicerecette.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss'],
})
export class InstructionComponent implements OnInit {
  // -----------------DONNEE API-------------------//

  URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s&count=20';

  meals: any = [];
  strMeal: any;
  repas: any;
  meal!: any;
  mealId: any;
  strMeasure1: any;
  strMeasure2: any;
  strMeasure3: any;
  strMeasure4: any;
  strMeasure5: any;
  strMeasure6: any;
  strMeasure7: any;
  strMeasure8: any;
  strMeasure9: any;
  strMeasure10: any;
  strMeasure11: any;
  strMeasure12: any;
  strMeasure14: any;
  strMeasure15: any;
  strMeasure16: any;
  strMeasure17: any;
  strMeasure18: any;
  strMeasure19: any;
  strMeasure20: any;

  strInstructions: any;
  strIngredient1: any;
  strIngredient2: any;
  strIngredient3: any;
  strIngredient4: any;
  strIngredient5: any;
  strIngredient6: any;
  strIngredient7: any;
  strIngredient8: any;
  strIngredient9: any;
  strIngredient10: any;
  strIngredient11: any;
  strIngredient12: any;
  strIngredient13: any;
  strIngredient14: any;
  strIngredient15: any;
  strIngredient16: any;
  strIngredient17: any;
  strIngredient18: any;
  strIngredient19: any;
  strIngredient20: any;

  strMealThumb: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ServicerecetteService,
    public http: HttpClient
  ) {}

  ngOnInit(): void {
    this.mealId = this.activatedRoute.snapshot.params['idMeal'];
 
    console.log('alioune ', this.mealId);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.mealId}`)
      .then((data) => data.json())
      .then((mealFromAPI) => {
     
        const { meals } = mealFromAPI; 
        console.log('&&&&&&', meals[0]); 
        this.meal = meals[0];
      });
  }
}
