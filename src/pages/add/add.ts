import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  item: Array<{word: string, trans: string, flipped: boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.item = [{word: 'person', trans: 'человек', flipped: false}];






  }

  itemTapped(event, item) {
    item.flipped = ! item.flipped;
  }
}
