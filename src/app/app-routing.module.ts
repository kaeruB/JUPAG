import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatchComponent} from './match/match.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'match', component: MatchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


