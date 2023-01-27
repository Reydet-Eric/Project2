import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetteComponent } from './recette/recette.component';
import { SeasonComponent } from './season/season.component';
import { MealComponent } from './meal/meal.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'recette', component: RecetteComponent,},
  {path:'season', component: SeasonComponent,},
  {path:'meal/:idMeal', component: MealComponent,},
  {path:'home', component: HomeComponent,},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
