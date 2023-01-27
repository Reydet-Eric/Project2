import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionComponent } from './instruction/instruction.component';
import { RecetteComponent } from './recette/recette.component';

export const routes: Routes = [

  {path: 'recette', component: RecetteComponent},
  {path: 'instruction', component: InstructionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
