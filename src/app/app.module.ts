import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { HomeCardComponent } from './home-card/home-card.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';


import { MatchComponent } from './match/match.component';
import {MatchGoalsComponent} from './match_components/goals/match_goals.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,
  MatCheckboxModule, MatListModule, MatTableModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import {MatchCardsComponent} from './match_components/cards/match_cards.component';
import {MatchInjuriesComponent} from './match_components/injuries/match_injuries.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { ShotsComponent } from './match_components/shots/shots.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    HomeComponent,
    HomeCardComponent,
    MatchComponent,
    FooterComponent,
    MatchGoalsComponent,
    MatchCardsComponent,
    MatchInjuriesComponent,
    SubheaderComponent,
    ShotsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
