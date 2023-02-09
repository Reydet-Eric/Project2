import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicerecetteService } from '../servicerecette.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  datedujour = new Date();

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(public service: ServicerecetteService, public router: Router) {}

  saison = this.service.getSaison();
  urlsaison: string = this.service.getIcons();

  routeSaison(): any {
    if (this.saison === 'Winter') {
      return './season-winter';
    }
    if (this.saison === 'Spring') {
      return './season-spring';
    }
    if (this.saison === 'Summer') {
      return './season-summer';
    }
    if (this.saison === 'Autumn') {
      return './season-autumn';
    }
  }
}
