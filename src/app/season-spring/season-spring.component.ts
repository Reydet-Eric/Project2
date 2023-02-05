import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicerecetteService } from '../servicerecette.service';
import { FormControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-season-spring',
  templateUrl: './season-spring.component.html',
  styleUrls: ['./season-spring.component.scss']
})
export class SeasonSpringComponent implements OnInit{

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
    return fruits.mois.includes(3) || fruits.mois.includes(4) || fruits.mois.includes(5)  ;
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

  affichBonus(index: number,veget: any){
    console.log(index);
  this.servicerecetteService.getChangeIndex(index)
  // this.infosPlus = this.servicerecetteService.getBonus()
  this.infosPlus = !this.infosPlus
  this.displayBonus.emit(index)
  this.servicerecetteService.getChangeList(veget)
  }

  closeBonus(){
    this.infosPlus = !this.infosPlus
    // this.infosPlus = this.servicerecetteService.getBonus()
  }
  
  }

