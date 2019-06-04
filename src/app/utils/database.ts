import {Link} from './Link';

// type, title, icon, date = null, flag = null, picture = null
export const matchLinks: Array<Link> = [
  new Link('match', 'FC Barcelona - Nippon Tokyo', '<i class="fas fa-external-link-square-alt"></i>', '22.05.2019'),
  new Link('match', 'FC Barcelona - Nippon Tokyo', '<i class="fas fa-external-link-square-alt"></i>', '22.05.2019'),
  new Link('match', 'FC Barcelona - Nippon Tokyo', '<i class="fas fa-external-link-square-alt"></i>', '22.05.2019')
];

export const playerLinks: Array<Link> = [
  new Link('player', 'Golo Kante', '<i class="fas fa-external-link-square-alt"></i>', '', '', 'assets/img/kante.JPG'),
  new Link('player', 'Keisuke Honda', '<i class="fas fa-external-link-square-alt"></i>', '', '', 'assets/img/honda.JPG'),
  new Link('player', 'Shinji Kagawa', '<i class="fas fa-external-link-square-alt"></i>', '', '', 'assets/img/kagawa.JPG'),
  new Link('player', 'Samuel Umtiti', '<i class="fas fa-external-link-square-alt"></i>', '', '', 'assets/img/samuel.JPG')
];

export const teamLinks: Array<Link> = [
  new Link('team', 'Tottenham Hotspur', '<i class="fas fa-external-link-square-alt"></i>', '', '<i class="fas fa-flag"></i>'),
  new Link('team', 'Liverpool', '<i class="fas fa-external-link-square-alt"></i>', '', '<i class="fas fa-flag"></i>'),
  new Link('team', 'Newcastle', '<i class="fas fa-external-link-square-alt"></i>', '', '<i class="fas fa-flag"></i>')
];
