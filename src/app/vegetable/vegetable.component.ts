import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicerecetteService } from '../servicerecette.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.scss']
})
export class VegetableComponent implements OnInit{
bonusVegetable: boolean = false
tableauSeason:any = []
index = 0
// @Input() bonus: any
// @Input() index: any | undefined
@Output() close: EventEmitter<any> = new EventEmitter<any>()

constructor(public serviceRecette: ServicerecetteService){}

ngOnInit(): void {
 this.tableauSeason=this.serviceRecette.season
console.log(this.serviceRecette.list);
this.index = this.serviceRecette.getIndex();
console.log(this.index);
this.tableauSeason= this.serviceRecette.list
console.log(this.tableauSeason[this.index].name);



}

retour(){
  this.serviceRecette.getNoBonus()
console.log("retour")
console.log(this.serviceRecette.getBonus())
this.bonusVegetable=this.serviceRecette.getBonus()

   this.close.emit()
}
}
