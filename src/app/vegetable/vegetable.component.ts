import { Component } from '@angular/core';
import { CLOSING } from 'ws';
import { ServicerecetteService } from '../servicerecette.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.scss']
})
export class VegetableComponent {
bonusVegetable: boolean = false

// @Output() close:

constructor(public serviceRecette: ServicerecetteService){}


retour(){
console.log("retour")
   this.serviceRecette.getNoBonus()
}
}
