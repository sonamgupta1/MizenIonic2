import {IonicApp, Page, NavController} from 'ionic/ionic';
import {DayCounterPage} from '../daycounter/daycounter';

import "./card.scss";

@Page({
    templateUrl: 'app/card/card.html'
})


export class CardPage {

    constructor(nav: NavController, app: IonicApp) {
        this.nav = nav;
        this.app = app;
    }

    next_page()
    {
        this.nav.push(DayCounterPage);
        console.log("click successful");


    }
}
