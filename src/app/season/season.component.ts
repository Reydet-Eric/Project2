import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, FormControl } from '@angular/forms';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-date';
  season: Array<any> = [
    {name:"eggplant",mois:[5,6,7,8,9]},
    {name:"cauliflower",mois:[3,4,5,6,7,8,9,10,11]},
    {name:"mushrooms",mois:[1,2,3,4,5,6,7,8,9,10,11,12]},
    {name:"endive",mois:[1,2,3,4,10,11,12]},
    {name:"chinese cabbage",mois:[1,2,3,8,9,10,11,12]},
    {name:"collard",mois:[1,2,11,12]},
    {name:"potatoes",mois:[1,2,3,4,5,6,7,8,9,10,11,12]},
    {name:"carrots",mois:[1,2,3,4,5,6,7,8,9,10,11,12]},
    {name:"brussels_sprouts",mois:[1,2,10,11,12]},
    {name:"beetroot",mois:[1,2,3,9,10,11,12]},
    {name:"red_cabbage",mois:[1,2,3,9,10,11,12]},
    {name:"celeriac",mois:[1,2,3,9,10,11,12]},
    {name:"asparagus",mois:[4,5,6]},
    {name:"spinach",mois:[3,4,5,6,9,10]},
    {name:"tomatoes",mois:[4,5,6,7,8,9,10,11]},
    {name:"onions",mois:[1,2,3,4,5,6,7,8,9,10,11,12]},
    {name:"apples",mois:[1,2,3,4,8,9,10,11,12]},
    {name:"strawberries",mois:[5,6,7,8]},
    {name:"raspberries",mois:[6,7,8,9]},
    {name:"rhubarb",mois:[4,5,6]}
    ]
date= new Date()
month = this.date.getMonth()+1
selectedItems:any= []
selectedItemsList:any =[]
form : FormGroup;
resultat: any
list: any
URL="https://www.themealdb.com/api/json/v1/1/filter.php?i="

constructor(fb: FormBuilder, public hhtp: HttpClient){
  this.form = fb.group({
    selectedItems: new FormArray([])
  });
}

veget = this.season.filter((fruits => {
  return fruits.mois.includes(this.month);
}))

ngOnInit():void {
  this.selectedItemsSeason();

}

selectedItemsSeason() {
  this.selectedItemsList = this.veget.filter((value, index) => {
  });
}

onCheckboxChange(event: any){
  const selectedItems = (this.form.controls['selectedItems'] as FormArray);
  if (event.target.checked) {
    selectedItems.push (new FormControl (event.target.value));
  } else {
    const index = selectedItems.controls.findIndex ( x=> x.value === event.target.value);
    selectedItems.removeAt (index);

  }
}

submit(){

    this.list=this.form.value.selectedItems.join();
  console.log(`${this.URL}${this.list}`)
  this.hhtp.get<any>(this.URL+this.list).subscribe(response => {
this.resultat=response

this.resultat.title=response.meals[0].strMeal;
this.resultat.image=response.meals[0].strMealThumb;
 console.log(this.resultat.title);
 console.log(this.resultat.image);
  });
}

  }


