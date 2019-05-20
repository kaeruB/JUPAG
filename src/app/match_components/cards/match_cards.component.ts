import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-cards',
  templateUrl: './match_cards.component.html',
  styleUrls: ['./match_cards.component.scss']
})
export class MatchCardsComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }

  chengeDescription($event) {
    // document.querySelector('.details__img:first-child').setAttribute('src', 'assets/img/kante.JPG');
    // document.querySelector('.details__img:nth-child(1)').setAttribute('src', 'assets/img/samuel.JPG');
  }

}

