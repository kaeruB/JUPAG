import { Component, OnInit, Input } from '@angular/core';

interface Card {
  id: string;
  panel: string; // TODO enum: left/right
  top: number;
  left: number;
  player: string;
  playerPhotoPath: string;
  victim: string;
  victimPhotoPath: string;
  minute: string;
}

@Component({
  selector: 'app-match-cards',
  templateUrl: './match_cards.component.html',
  styleUrls: ['./match_cards.component.scss']
})
export class MatchCardsComponent implements OnInit {

  team1: Card[] = [
    {id: 'card1-left', panel: 'left', top: 20, left: 50, player: 'N\'Golo Kante', playerPhotoPath: 'assets/img/samuel.JPG',
      victim: 'Samuel Umtiti', victimPhotoPath: 'assets/img/samuel.JPG', minute: '20\''},
    {id: 'card2-left', panel: 'left', top: 60, left: 50, player: 'Keisuke Honda', playerPhotoPath: 'assets/img/honda.JPG',
      victim: 'Shinji Kagawa', victimPhotoPath: 'assets/img/kagawa.JPG', minute: '70\''}
  ];

  team2: Card[] = [
    {id: 'card1-right', panel: 'right', top: 40, left: 50, player: 'Samuel Umtiti', playerPhotoPath: 'assets/img/samuel.JPG',
      victim: 'N\'Golo Kante', victimPhotoPath: 'assets/img/samuel.JPG', minute: '40\''}
  ];

  constructor() {}
  ngOnInit() {
    this.loadCardsOnTimelines(this.team1);
    this.loadCardsOnTimelines(this.team2);
  }

  loadCardsOnTimelines(team) {
    team.forEach( e => {
      const newCard = document.getElementById(e.id);
      newCard.style.top = e.top + '%';
      newCard.style.left = e.left + '%';
    });
  }

  changeDescription($event) {
    this.unselectPreviousCard(this.extractPanelFromCardId($event.currentTarget.id));
    $event.currentTarget.classList.add('chosen-card');
    // document.querySelector('.details__img:first-child').setAttribute('src', 'assets/img/kante.JPG');
    // document.querySelector('.details__img:nth-child(1)').setAttribute('src', 'assets/img/samuel.JPG');
  }

  extractPanelFromCardId(cardId): string {
    return cardId.endsWith('left') ? 'left' : 'right';
  }

  unselectPreviousCard(panel) {
    const previouslySelecredCard = document.querySelector('.cards__panel--' + panel + ' .chosen-card');
    if (previouslySelecredCard) { previouslySelecredCard.classList.remove('chosen-card'); }
  }
}

