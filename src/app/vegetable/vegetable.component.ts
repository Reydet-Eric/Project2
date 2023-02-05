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
<<<<<<< HEAD
<<<<<<< HEAD
  console.log("retour")
  console.log(this.serviceRecette.getBonus())
  this.bonusVegetable=this.serviceRecette.getBonus()
=======
console.log("retour")
console.log(this.serviceRecette.getBonus())
// this.bonusVegetable=this.serviceRecette.getBonus()

>>>>>>> 49720b6edf84a0b110025cc60351152f9fd7a2b3
=======

  console.log("retour")
  console.log(this.serviceRecette.getBonus())
  this.bonusVegetable=this.serviceRecette.getBonus()

console.log("retour")
console.log(this.serviceRecette.getBonus())
// this.bonusVegetable=this.serviceRecette.getBonus()


>>>>>>> 45dc6dfe7f826c56de858428f17df596f266cc74
   this.close.emit()
}
}
