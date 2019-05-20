import { Component, OnInit } from '@angular/core';
import {matchLinks, playerLinks, teamLinks} from '../utils/database';
import * as selectors from '../utils/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  matchLinks = matchLinks;
  playerLinks = playerLinks;
  teamLinks = teamLinks;
  matchString = 'Match'; // could not pass a string in html to child's component, maybe there's a better way
  playerString = 'Player';
  teamString = 'Team';
  homeMatchCardLinksSelector = selectors.homeMatchCardLinksSelector;
  homePlayerCardLinksSelector = selectors.homePlayerCardLinksSelector;
  homeTeamCardLinksSelector = selectors.homeTeamCardLinksSelector;
}
