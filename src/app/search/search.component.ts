import { Component, OnInit } from '@angular/core';

export interface Item {
  item: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor() { }
  displayedColumns = ['item'];
  matchColumns = ['item'];
  playerColumns = ['player'];
  teamColumns = ['team'];
  matches: Item[] = [
    {item: 'Jawor Krzemienica - Wisła Kraków 30.05.2019'},
    {item: 'FC Barcelona - Nippon Tokyo 22.05.2019'},
    {item: 'FC Barcelona - Nippon Tokyo 22.05.2019'},
    {item: 'FC Barcelona - Nippon Tokyo 22.05.2019'},
    {item: 'FC Barcelona - Nippon Tokyo 22.05.2019'},
    {item: 'FC Barcelona - Nippon Tokyo 22.05.2019'},
    {item: 'FC Barcelona - Nippon Tokyo 22.05.2019'}
  ];
  players: Item[] = [
    {item: 'N\'Golo Kante'},
    {item: 'N\'Golo Kante'},
    {item: 'N\'Golo Kante'},
    {item: 'N\'Golo Kante'},
    {item: 'N\'Golo Kante'}
  ];
  teams: Item[] = [
    {item: 'Tottenham Hotspur'},
    {item: 'Tottenham Hotspur'},
    {item: 'Tottenham Hotspur'}
  ];
  ngOnInit() {
  }

  toggleFilter() {
    document.querySelector('app-filter').classList.toggle('hidden');
  }

  hideSearch() {
    document.querySelector('app-search').classList.toggle('hidden');
  }
}
