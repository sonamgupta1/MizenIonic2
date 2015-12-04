import {Page, NavController} from
    'ionic/ionic';

import "./settings.scss";



@Page({
    templateUrl: 'app/settings/setting.html'
})


export class SettingPage {
    constructor(nav: NavController) {
        this.nav = nav;
    }


}
