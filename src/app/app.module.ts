import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { HomeCardComponent } from './home-card/home-card.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { MatchComponent } from './match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    HomeComponent,
    HomeCardComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
