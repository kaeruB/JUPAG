import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.scss']
})
export class ShotsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
  }
}
