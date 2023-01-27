import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { RecetteComponent } from './recette/recette.component';
import { SeasonComponent } from './season/season.component';
import { MealComponent } from './meal/meal.component';

const routes: Routes = [
  {path:'recette', component: RecetteComponent,},
  {path:'season', component: SeasonComponent,},
  {path:'meal/:idMeal', component: MealComponent,}
=======
import { InstructionComponent } from './instruction/instruction.component';
import { RecetteComponent } from './recette/recette.component';

export const routes: Routes = [

  {path: 'recette', component: RecetteComponent},
  {path: 'instruction', component: InstructionComponent},

>>>>>>> alicia-modal

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
