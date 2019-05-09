import { Component, OnInit, Input } from '@angular/core';
import {Link} from '../utils/Link';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() links: Array<Link> = [];
  @Input() linksListSelector: string;
  constructor() { }
  ngOnInit() {
    this.links.forEach( link => {
      let markup: string;
      if (link.type === 'match') {
        markup = `<mat-list-item role="listitem" class="home-card__link list-group-item u-margin-bottom-small">
                  ${link.title} <span class="home-card__link--title">${link.date}</span>
                  </mat-list-item>`;
      } else if (link.type === 'player') {
        markup = `<mat-list-item role="listitem" class="home-card__link list-group-item u-margin-bottom-small" style="
            display: flex;
            flex-direction: column;
            align-items: center;
        ">
                  <figure class="home-card__img--shape" style="
                    width: 5rem;
                    height: 5rem;
                    background-color: white;
                    border-radius: 50%;
                    overflow: hidden;
                  ">
                    <img class="home-card__img" src="${link.picture}" alt="player's photo" style="
                      height: 100%;
                      transform: scale(1.1);
                      filter: brightness(95%);
                    ">
                  </figure>
                  ${link.title}
                  </mat-list-item>`;
      } else {
        markup = `<mat-list-item role="listitem" class="home-card__link list-group-item u-margin-bottom-small">
                  ${link.flag}
                  ${link.title}
                  </mat-list-item>`;
      }
      document.querySelector(this.linksListSelector).insertAdjacentHTML('beforeend', markup);
    });
  }
}
