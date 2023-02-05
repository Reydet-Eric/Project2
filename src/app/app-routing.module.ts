import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetteComponent } from './recette/recette.component';
import { SeasonComponent } from './season/season.component';
import { InstructionComponent } from './instruction/instruction.component';
import { HomeComponent } from './home/home.component';
import { SeasonSpringComponent } from './season-spring/season-spring.component';
import { SeasonSummerComponent } from './season-summer/season-summer.component';
import { SeasonWinterComponent } from './season-winter/season-winter.component';
import { SeasonAutomnComponent } from './season-automn/season-automn.component';

const routes: Routes = [
  { path: 'recette', component: RecetteComponent },
  { path: 'season', component: SeasonComponent },
  { path: 'instruction/:idMeal', component: InstructionComponent },
  { path: 'home', component: HomeComponent },

  { path: 'season-spring', component: SeasonSpringComponent },
  { path: 'season-summer', component: SeasonSummerComponent },
  { path: 'season-winter', component: SeasonWinterComponent },
  { path: 'season-autumn', component: SeasonAutomnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
