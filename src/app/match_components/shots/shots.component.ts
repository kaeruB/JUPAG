import { Component, OnInit } from '@angular/core';

export interface Ball {
  id: string;
  left: number;
  top: number;
}

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.scss']
})

export class ShotsComponent implements OnInit {
  balls: Ball[] = [
    {id: 'ball1', left: 10, top: 20},
    {id: 'ball2', left: 68, top: 40},
    {id: 'ball3', left: 20, top: 40},
    {id: 'ball4', left: 76, top: 56},
    {id: 'ball5', left: 62, top: 20},
    {id: 'ball6', left: 11, top: 35},
    {id: 'ball7', left: 21, top: 21},
    {id: 'ball8', left: 30, top: 50},
    {id: 'ball9', left: 50, top: 17}
  ];
  balls2: Ball[] = [
    {id: 'ball1', left: 15, top: 30},
    {id: 'ball2', left: 23, top: 60},
    {id: 'ball3', left: 67, top: 20},
    {id: 'ball4', left: 73, top: 36},
    {id: 'ball5', left: 26, top: 28},
    {id: 'ball6', left: 16, top: 43},
    {id: 'ball7', left: 24, top: 63},
    {id: 'ball8', left: 76, top: 56},
    {id: 'ball9', left: 64, top: 25}
  ];
  currentlyUsedBallsPositions = 'balls';

  constructor() { }

  ngOnInit() {
    this.loadBallsPositions(this.balls);
  }

  loadBallsPositions(ballsPositionsArray) {
    ballsPositionsArray.forEach( e => {
      const newBallIcon = document.getElementById(e.id);
      newBallIcon.style.top = e.top + '%';
      newBallIcon.style.left = e.left + '%';
    });
  }

  toggleTeam() {
    const emptyGround1 = 'assets/img/half-ground.png';
    const emptyGround2 = 'assets/img/half-ground-right.png';
    const imgToToggle = document.querySelector('.empty-ground__img');
    imgToToggle.setAttribute('src',  (imgToToggle.getAttribute('src') === emptyGround1) ? emptyGround2 : emptyGround1);

    const headerToToggle = document.getElementsByClassName('shots__upper--header');
    Array.from(headerToToggle).forEach((el) => {
      el.classList.toggle('darken-header');
    });

    if (this.currentlyUsedBallsPositions === 'balls') {
      this.currentlyUsedBallsPositions = 'balls2';
      this.loadBallsPositions(this.balls2);
    } else {
      this.loadBallsPositions(this.balls);
      this.currentlyUsedBallsPositions = 'balls';
    }

    this.removeBallSelection();
  }
  ballOnClick($event) {
    this.removeBallSelection();
    $event.currentTarget.firstChild.firstChild.classList.add('ball-chosen');
    // console.log($event.currentTarget.firstChild.firstChild);
  }

  removeBallSelection() {
    const previouslySelectedBall = document.querySelector('.ball-chosen');
    if (previouslySelectedBall) {
      previouslySelectedBall.classList.remove('ball-chosen');
    }
  }
}
