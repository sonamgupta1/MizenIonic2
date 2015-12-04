import {IonicApp, Page, NavController} from 'ionic/ionic';

import "./category.scss";

@Page({
    templateUrl: 'app/category/category.html'
})


export class CategoryPage {
    constructor(nav: NavController, app: IonicApp) {
        this.nav = nav;
        this.app = app;
    }

    //login() {
    //    this.nav.push(HomePage);
    //}
}

