import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicerecetteService } from '../servicerecette.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.scss']
})
export class VegetableComponent implements OnInit{
bonusVegetable: boolean = false


@Input() bonus: {} | undefined
@Input() index: number | undefined
@Output() close: EventEmitter<any> = new EventEmitter<any>()

constructor(public serviceRecette: ServicerecetteService){}

ngOnInit(): void {
    console.log(this.bonus)

}

retour(){
  this.serviceRecette.getNoBonus()
console.log("retour")
console.log(this.serviceRecette.getBonus())
this.bonusVegetable=this.serviceRecette.getBonus()
   this.close.emit()
}
}
