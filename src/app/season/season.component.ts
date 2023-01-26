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

season=this.servicerecetteService.getSeason()
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
this.submit();

  this.servicerecetteService.getPost().subscribe((recipe)=>{
 console.log("reeeesult",recipe )
 this.newRecipe = recipe
  })

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


