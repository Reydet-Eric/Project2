import { Component, OnInit } from '@angular/core';
import { ServicerecetteService } from '../servicerecette.service';
import { FormControl, FormArray, FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-season-winter',
  templateUrl: './season-winter.component.html',
  styleUrls: ['./season-winter.component.scss']
})
export class SeasonWinterComponent implements OnInit{

constructor(public servicerecetteService: ServicerecetteService, fb: FormBuilder, public http:HttpClient){

this.form = fb.group({
  selectedItems: new FormArray([]),

})
}

season = this.servicerecetteService.getSeason()
selectedItems:any= []
selectedItemsList:any =[]
form : FormGroup;
resultat: any
meale : any
list: any
infosPlus: boolean = false

veget = this.season.filter((fruits => {
  return fruits.mois.includes(1) || fruits.mois.includes(2) || fruits.mois.includes(12)  ;
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
submit(){}
affichBonus(){
this.infosPlus = this.servicerecetteService.getBonus()
this.infosPlus = !this.infosPlus
}
}
