import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicerecetteService } from '../servicerecette.service';
import { FormControl, FormArray, FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-season-winter',
  templateUrl: './season-winter.component.html',
  styleUrls: ['./season-winter.component.scss']
})
export class SeasonWinterComponent implements OnInit{

item= {
  name:"",mois:[],clipart:"",bonus:""
}
  indexIci: number = 0
  index = 0

@Input() bonus:any | undefined
@Output() displayBonus: EventEmitter<any> = new EventEmitter<any>()

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
  this.indexIci=this.index
}


selectedItemsSeason() {
  this.selectedItemsList = this.veget.filter((value: any, index: any) => {
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

affichBonus(index: number,veget: any){
  console.log(index);
this.servicerecetteService.getChangeIndex(index)
// this.infosPlus = this.servicerecetteService.getBonus()
this.infosPlus = !this.infosPlus
this.displayBonus.emit(index)
this.servicerecetteService.getChangeList(veget)

// this.vegeta=item

}

closeBonus(){
  this.infosPlus = !this.infosPlus
  this.infosPlus = this.servicerecetteService.getBonus()
}
}
