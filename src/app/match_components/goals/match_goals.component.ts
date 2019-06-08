import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-goals',
  templateUrl: './match_goals.component.html',
  styleUrls: ['./match_goals.component.scss']
})
export class MatchGoalsComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }

  chanePictureLeft($event) {
    this.changePicture($event, 'goals__panel--left');
  }

  changePictureRight($event) {
    this.changePicture($event, 'goals__panel--right');
  }

  changePicture($event, panelClass) {
    const eventTargetId = $event.currentTarget.id;
    console.log(eventTargetId);
    console.log(panelClass);
    document.querySelector(`.${panelClass} .goals__picture img`).setAttribute('src', `../../../assets/img/goals/${eventTargetId}.png`);
  }
}

