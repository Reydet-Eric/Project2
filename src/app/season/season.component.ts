import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, FormControl,ReactiveFormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http'
import { ServicerecetteService } from 'src/app/servicerecette.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit{
 
  public ingredient : any ;
  season: Array<any> = [
<<<<<<< HEAD
    {name:"eggplant",mois:[5,6,7,8,9],clipart:"../assets/cliparts/eggplant-clipart.svg"},
    {name:"cauliflower",mois:[3,4,5,6,7,8,9,10,11],clipart:"../assets/cliparts/cauliflower-clipart.svg"},
    {name:"mushrooms",mois:[1,2,3,4,5,6,7,8,9,10,11,12],clipart:"../assets/cliparts/mushrooms-clipart.svg"},
    {name:"endive",mois:[1,2,3,4,10,11,12],clipart:"../assets/cliparts/mushrooms-clipart.svg"},
    {name:"chinese_cabbage",mois:[1,2,3,8,9,10,11,12],clipart:"../assets/cliparts/chinese-cabbage-clipart.svg"},
    {name:"collard",mois:[1,2,11,12],clipart:"../assets/cliparts/collard-clipart.jpg"},
    {name:"potatoes",mois:[1,2,3,4,5,6,7,8,9,10,11,12],clipart:"../assets/cliparts/potatoes-clipart.svg"},
    {name:"carrots",mois:[1,2,3,4,5,6,7,8,9,10,11,12],clipart:"../assets/cliparts/carrot-clipart.svg"},
    {name:"brussels_sprouts",mois:[1,2,10,11,12],clipart:"../assets/cliparts/brussel-sprouts-clipart.svg"},
    {name:"beetroot",mois:[1,2,3,9,10,11,12],clipart:"../assets/cliparts/beetroot-clipart.svg"},
    {name:"red_cabbage",mois:[1,2,3,9,10,11,12],clipart:"../assets/cliparts/red-cabbage-clipart.svg"},
    {name:"celeriac",mois:[1,2,3,9,10,11,12],clipart:"../assets/cliparts/celery-clipart.svg"},
    {name:"asparagus",mois:[4,5,6],clipart:"../assets/cliparts/aspargus-clipart.svg"},
    {name:"spinach",mois:[3,4,5,6,9,10],clipart:"../assets/cliparts/spinach-clipart.svg"},
    {name:"tomatoes",mois:[4,5,6,7,8,9,10,11],clipart:"../assets/cliparts/tomato-clipart.svg"},
    {name:"onions",mois:[1,2,3,4,5,6,7,8,9,10,11,12],clipart:"../assets/cliparts/onion-clipart.svg"},
    {name:"apples",mois:[1,2,3,4,8,9,10,11,12],clipart:"../assets/cliparts/apple-clipart.svg"},
    {name:"strawberries",mois:[5,6,7,8],clipart:"../assets/cliparts/strawberries-clipart.svg"},
    {name:"raspberries",mois:[6,7,8,9],clipart:"../assets/cliparts/raspberry-clipart.svg"},
    {name:"rhubarb",mois:[4,5,6],clipart:"../assets/cliparts/rhubarb-clipart.svg"}
=======
    {name:"egg",mois:[5,6,7,8,9]},
    {name:"oil",mois:[3,4,5,6,7,8,9,10,11]},
    {name:"mushrooms",mois:[1,2,3,4,5,6,7,8,9,10,11,12]},
    {name:"endive",mois:[1,2,3,4,10,11,12]},
    {name:"chinese cabbage",mois:[1,2,3,8,9,10,11,12]},
    {name:"collard",mois:[1,2,11,12]},
    {name:"potatoes",mois:[1,2,3,4,5,6,7,8,9,10,11,12]},
    {name:"carrots",mois:[1,2,3,4,5,6,7,8,9,10,11,12]},
    {name:"brussels_sprouts",mois:[1,2,10,11,12]},
    {name:"milk",mois:[1,2,3,9,10,11,12]},
    {name:"oil",mois:[1,2,3,9,10,11,12]},
    {name:"egg",mois:[1,2,3,9,10,11,12]},
    {name:"asparagus",mois:[4,5,6]},
    {name:"spinach",mois:[3,4,5,6,9,10]},
    {name:"tomatoes",mois:[4,5,6,7,8,9,10,11]},
    {name:"onions",mois:[1,2,3,4,5,6,7,8,9,10,11,12]},
    {name:"apple",mois:[1,2,3,4,8,9,10,11,12]},
    {name:"cheese",mois:[5,6,7,8]},
    {name:"milk",mois:[6,7,8,9]},
    {name:"rhubarb",mois:[4,5,6]}
>>>>>>> 94f5605c1da8c83d5c9a0ba419c523a3f9c3645e
    ]
date= new Date()
month = this.date.getMonth()+1
selectedItems:any= []
newLegume : ServicerecetteService
newRecipe :any
selectedItemsList:any =[]
form : FormGroup;
resultat: any
meale : any
list: any
URL="https://www.themealdb.com/api/json/v1/1/filter.php?i="

constructor(fb: FormBuilder, public http: HttpClient , private servicerecetteService : ServicerecetteService){
  this.form = fb.group({
    selectedItems: new FormArray([]),
 
  })
  this.ingredient = this.list
  ;
  this.newLegume = servicerecetteService;

}

veget = this.season.filter((fruits => {
  return fruits.mois.includes(this.month);
}))

ngOnInit():void {
  this.selectedItemsSeason();
<<<<<<< HEAD
this.submit()
=======
  this.servicerecetteService.getPost().subscribe((recipe)=>{
 console.log("reeeesult",recipe )
 this.newRecipe = recipe 
  })
>>>>>>> 94f5605c1da8c83d5c9a0ba419c523a3f9c3645e
}

afficher(){
  
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
  this.http.get<any>(this.URL+this.list).subscribe(response => {
this.resultat=response
this.ingredient = this.list;
this.resultat.title=response.meals[0].strMeal;
this.resultat.image=response.meals[0].strMealThumb;
 console.log(this.resultat.title);
 console.log(this.resultat.image);
  });
}

  }


