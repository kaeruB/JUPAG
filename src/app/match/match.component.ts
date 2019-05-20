import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector('.header__home--button').classList.remove('hidden');
    document.querySelector('.subheader__button--match').classList.add('subheader__button--clicked');
  }
}
