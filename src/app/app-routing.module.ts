import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatchComponent} from './match/match.component';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'home/search', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'match', component: MatchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


