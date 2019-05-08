export class Link {
  type: string; // match, player, team - can be enum
  title: string;
  icon: string;
  date: string;
  flag: string;
  picture: string;

  constructor(type, title, icon, date = null, flag = null, picture = null) {
    this.type = type;
    this.title = title;
    this.date = date;
    this.icon = icon;
    this.flag = flag;
    this.picture = picture;
  }
}
