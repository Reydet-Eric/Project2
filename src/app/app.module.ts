import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SeasonComponent } from './season/season.component';
import { RecetteComponent } from './recette/recette.component';
import { HomeComponent } from './home/home.component';

import { SeasonWinterComponent } from './season-winter/season-winter.component';
import { SeasonSpringComponent } from './season-spring/season-spring.component';
import { SeasonSummerComponent } from './season-summer/season-summer.component';
import { SeasonAutomnComponent } from './season-automn/season-automn.component';

import { InstructionComponent } from './instruction/instruction.component';
import { VegetableComponent } from './vegetable/vegetable.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecetteComponent,
    HomeComponent,
    SeasonComponent,
    SeasonWinterComponent,
    SeasonSpringComponent,
    SeasonSummerComponent,
    SeasonAutomnComponent,
    InstructionComponent,
    VegetableComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
