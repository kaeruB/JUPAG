import { Component, OnInit } from '@angular/core';

interface Ball {
  id: string;
  left: number;
  top: number;
  minute: number;
  player: string;
}

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.scss']
})

export class ShotsComponent implements OnInit {
  team1: Ball[] = [
    {id: 'ball1', left: 10, top: 20, minute: 4, player: 'Sergio Ramos'},
    {id: 'ball2', left: 68, top: 40, minute: 17, player: 'Sergio Ramos'},
    {id: 'ball3', left: 20, top: 40, minute: 66, player: 'Sergio Ramos'},
    {id: 'ball4', left: 76, top: 56, minute: 36, player: 'Sergio Ramos'},
    {id: 'ball5', left: 62, top: 20, minute: 10, player: 'Sergio Ramos'},
    {id: 'ball6', left: 11, top: 35, minute: 60, player: 'Sergio Ramos'},
    {id: 'ball7', left: 21, top: 21, minute: 56, player: 'Sergio Ramos'},
    {id: 'ball8', left: 30, top: 50, minute: 34, player: 'Sergio Ramos'},
    {id: 'ball9', left: 50, top: 17, minute: 23, player: 'Sergio Ramos'}
  ];
  team2: Ball[] = [
    {id: 'ball1', left: 15, top: 30, minute: 65, player: 'Lionel Messi'},
    {id: 'ball2', left: 23, top: 60, minute: 23, player: 'Lionel Messi'},
    {id: 'ball3', left: 67, top: 20, minute: 54, player: 'Lionel Messi'},
    {id: 'ball4', left: 73, top: 36, minute: 12, player: 'Lionel Messi'},
    {id: 'ball5', left: 26, top: 28, minute: 2, player: 'Lionel Messi'},
    {id: 'ball6', left: 16, top: 43, minute: 45, player: 'Lionel Messi'},
    {id: 'ball7', left: 24, top: 63, minute: 23, player: 'Lionel Messi'},
    {id: 'ball8', left: 76, top: 56, minute: 35, player: 'Lionel Messi'},
    {id: 'ball9', left: 64, top: 25, minute: 50, player: 'Lionel Messi'}
  ];
  currentlyDisplayedTeam = 'team1';

  constructor() { }

  ngOnInit() {
    this.setBallsPositionsOnGround(this.team1);
    this.setBallsPositionsOnTimeline(this.team1, this.team2);
  }

  setBallsPositionsOnGround(ballsPositionsArray) {
    ballsPositionsArray.forEach( e => {
      const newBallIcon = document.getElementById(e.id);
      newBallIcon.style.top = e.top + '%';
      newBallIcon.style.left = e.left + '%';
    });
  }

  setBallsPositionsOnTimeline(team1, team2) {
    team1.forEach( e => {
      const newBallIconOnTimelineTeam1 = document.getElementById(e.id + '-timeline-team1');
      newBallIconOnTimelineTeam1.style.top = e.minute + '%';
      newBallIconOnTimelineTeam1.style.left = '0%';
    });

    team2.forEach( e => {
      const newBallIconOnTimelineTeam2 = document.getElementById(e.id + '-timeline-team2');
      newBallIconOnTimelineTeam2.style.top = e.minute + '%';
      newBallIconOnTimelineTeam2.style.left = '45%';
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

    if (this.currentlyDisplayedTeam === 'team1') {
      this.currentlyDisplayedTeam = 'team2';
      this.setBallsPositionsOnGround(this.team2);
    } else {
      this.setBallsPositionsOnGround(this.team1);
      this.currentlyDisplayedTeam = 'team1';
    }

    this.removeBallSelection();

    this.toggleTimeline();
  }

  toggleTimeline() {
    const timelines = document.getElementsByClassName('shots__timeline');
    Array.from(timelines).forEach((el) => {
      el.classList.toggle('hidden');
    });
  }

  ballOnClick($event) {
    this.removeBallSelection();

    let eventTargetId = $event.currentTarget.id;
    if (eventTargetId.endsWith('-timeline-' + this.currentlyDisplayedTeam)) {
      eventTargetId = eventTargetId.replace('-timeline-' + this.currentlyDisplayedTeam, '');
    }
    console.log(eventTargetId);

    document.querySelector('#' + eventTargetId + ' i').classList.add('ball-chosen');
    document.querySelector('#' + eventTargetId + '-timeline-' + this.currentlyDisplayedTeam + ' i')
      .classList.add('timeline-ball-chosen');
  }

  removeBallSelection() {
    const previouslySelectedBall = document.querySelector('.ball-chosen');
    if (previouslySelectedBall) {
      previouslySelectedBall.classList.remove('ball-chosen');
    }

    const previouslySelectedTimelineBall = document.querySelector('.timeline-ball-chosen');
    if (previouslySelectedTimelineBall) {
      previouslySelectedTimelineBall.classList.remove('timeline-ball-chosen');
    }
  }
}
