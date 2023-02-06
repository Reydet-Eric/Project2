import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  datedujour = new Date();

  isMenuOpen = false;
  
  toggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen;
  }

  now:any = new Date();
  month = this.now.getMonth() + 1;
  day = this.now.getDate();
  urlsaison:string='';

  getCurrentSeason():any {


  if (this.month > 3 && this.month < 6) {
    this.urlsaison="./assets/621715.png"
    return 'Spring';

  } else if (this.month > 6 && this.month < 9) {
    this.urlsaison="./assets/54455.png"
    return 'Summer';

  } else if (this.month > 9 && this.month < 12) {
    this.urlsaison="./assets/6778042.png"
    return 'Autumn';

  } else if (this.month >= 1 && this.month < 3) {
    this.urlsaison="./assets/2318963.png"
    return 'Winter';

  } else if (this.month == 3) {
    return this.day < 22 ? 'winter' : 'spring';
  } else if (this.month == 6) {
    return this.day < 22 ? 'spring' : 'summer';
  } else if (this.month == 9) {
    return this.day < 22 ? 'summer' : 'automn';
  } else if (this.month == 12) {
    return this.day < 22 ? 'fall' : 'winter';
   } 
}
saison = this.getCurrentSeason();

// Si nous sommes en Hiver; on affiche la page seasonHiver quand on clique sur About//

routeSaison(): any{

if(this.saison === 'Winter'){
  return './season-winter';
}
if(this.saison === 'Spring'){
  return './season-spring';
}

}

}


// <button type="button" class="btn" (click)="changementDePage();">Nouvelle Page</button>
// import { Router } from '@angular/router';
// changementDePage = function () {
//    this.router.navigate(['/urlVersLaNouvellePage']);
// };