import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicerecetteService } from '../servicerecette.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.scss']
})
export class VegetableComponent implements OnInit {
  bonusVegetable: boolean = false
  tableauSeason: any = []
  index = 0

  @Output() close: EventEmitter<any> = new EventEmitter<any>() //récupération du déclencheur

  constructor(public serviceRecette: ServicerecetteService) { }

  ngOnInit(): void {
    this.tableauSeason = this.serviceRecette.season // recupération de la liste des fruits/légumes
    console.log(this.serviceRecette.list);
    this.index = this.serviceRecette.getIndex(); // récupération de l'index du f/v selectionné
    console.log(this.index);
    this.tableauSeason = this.serviceRecette.list // récupération de la liste de saision
    console.log(this.tableauSeason[this.index].name);

  }

  retour() {
    this.serviceRecette.getNoBonus()
    console.log("retour")
    this.close.emit()
  }
}
