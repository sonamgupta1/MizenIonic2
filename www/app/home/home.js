import {Page, NavController} from 'ionic/ionic';

import "./home.scss";



@Page({
    templateUrl: 'app/home/home.html'
})


export class HomePage {
    constructor(nav: NavController) {
        this.nav = nav;
    }


}
