import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  dateFrom;
  dateTo;
  place = 'Chosen place';

  ageFrom;
  ageTo;
  ageValues = Array.from({length: 100}, (v, k) => k + 1);
  position;
  nationality;

  trainer;

  activeFrom;
  activeTo;
  bestInSeason;
  wonMatchesFrom;
  wonMatchesTo;
  lostMatchesFrom;
  lostMatchesTo;
  matchesValues = Array.from({length: 20}, (v, k) => k);

  goalsNumberFrom;
  goalsNumberTo;
  goalsNumberValues = Array.from({length: 50}, (v, k) => k);
  season;
  redFlagsFrom;
  redFlagsTo;
  yellowFlagsFrom;
  yellowFlagsTo;
  flagsValues = Array.from({length: 20}, (v, k) => k);

  constructor() {
  }

  ngOnInit() {
  }

}
