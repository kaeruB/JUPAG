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
    console.log(this.cardTitle);
    this.links.forEach( link => {
      const markup = `<li class="home-card__link">${link.title}</li>`;
      document.querySelector(this.linksListSelector).insertAdjacentHTML('beforeend', markup);
    });
  }

}
