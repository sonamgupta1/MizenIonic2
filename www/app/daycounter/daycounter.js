import {IonicApp, Page, NavController} from 'ionic/ionic';
import {LoginPage} from '../login/login';


import "./daycounter.scss";

@Page({
  templateUrl: 'app/daycounter/daycounter.html'
})
export class DayCounterPage {
  constructor(nav: NavController, app: IonicApp) {
    this.nav = nav;
    this.app = app;
  }
  next_page() {
    this.nav.push(LoginPage);
  }
}

