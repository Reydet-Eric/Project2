import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent implements OnInit{


  //-----------------DONNEE API-------------------//

URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s&count=20';

meals: any = [];
strMeal: any;

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

constructor(public http: HttpClient){}

ngOnInit(): void {
  this.http.get<any>(this.URL2).subscribe(response => {
    
    this.meals = response.meals;

    
  });

}}
