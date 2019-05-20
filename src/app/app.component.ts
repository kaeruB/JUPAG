import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchField: string;
  title = 'jupag';
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/') {
      document.querySelector('.header__home--button').classList.add('hidden'); // .setAttribute('display', 'none');
    }
  }
}


