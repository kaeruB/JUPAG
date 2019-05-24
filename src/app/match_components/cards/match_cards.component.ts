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
  positionImg: string;
}

@Component({
  selector: 'app-match-cards',
  templateUrl: './match_cards.component.html',
  styleUrls: ['./match_cards.component.scss']
})
export class MatchCardsComponent implements OnInit {

  team1: Card[] = [
    {id: 'card1-left', panel: 'left', top: 20, left: 50, player: 'N\'Golo Kante', playerPhotoPath: 'assets/img/kante.JPG',
      victim: 'Samuel Umtiti', victimPhotoPath: 'assets/img/samuel.JPG', minute: '20\'', positionImg: '../../../assets/img/ground-red.png'},
    {id: 'card2-left', panel: 'left', top: 60, left: 50, player: 'Keisuke Honda', playerPhotoPath: 'assets/img/honda.JPG',
      victim: 'Shinji Kagawa', victimPhotoPath: 'assets/img/kagawa.JPG', minute: '70\'', positionImg: '../../../assets/img/ground-yellow2.png'}
  ];

  team2: Card[] = [
    {id: 'card1-right', panel: 'right', top: 40, left: 50, player: 'Samuel Umtiti', playerPhotoPath: 'assets/img/samuel.JPG',
      victim: 'N\'Golo Kante', victimPhotoPath: 'assets/img/kante.JPG', minute: '40\'', positionImg: '../../../assets/img/ground-yellow.png'}
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
    const panel = this.extractPanelFromCardId($event.currentTarget.id);
    this.unselectPreviousCard(panel);
    $event.currentTarget.classList.add('chosen-card');

    // tslint:disable-next-line:max-line-length
    panel === 'left' ? this.updateInfoOnParticularPanel(panel, this.team1, $event) : this.updateInfoOnParticularPanel(panel, this.team2, $event);
  }

  updateInfoOnParticularPanel(panel, team, $event) {
    const panelElement = document.querySelector('.cards__panel--' + panel);
    const playerImgElement = panelElement.querySelector('.details__img--player');
    const playerNameElement = panelElement.querySelector('.details__name--player');
    const victimImgElement = panelElement.querySelector('.details__img--victim');
    const victimNameElement = panelElement.querySelector('.details__name--victim');
    const timeElement = panelElement.querySelector('.details__time');
    const groundImg = panelElement.querySelector('.cards__img--card');

    const cardInfo = team.find( e => e.id === $event.currentTarget.id);

    playerImgElement.setAttribute('src', cardInfo.playerPhotoPath);
    playerNameElement.textContent = cardInfo.player;
    victimImgElement.setAttribute('src', cardInfo.victimPhotoPath);
    victimNameElement.textContent = cardInfo.victim;
    timeElement.textContent = cardInfo.minute;
    groundImg.setAttribute('src', cardInfo.positionImg);
  }

  extractPanelFromCardId(cardId): string {
    return cardId.endsWith('left') ? 'left' : 'right';
  }

  unselectPreviousCard(panel) {
    const previouslySelecredCard = document.querySelector('.cards__panel--' + panel + ' .chosen-card');
    if (previouslySelecredCard) { previouslySelecredCard.classList.remove('chosen-card'); }
  }
}

