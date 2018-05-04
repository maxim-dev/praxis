import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  item: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.item = {word: '', trans: '', flipped: false};






  }

  addCard() {


    let list = localStorage.getItem('list');
    let items = JSON.parse(list);

    items.unshift(this.item);
    this.item = {word: '', trans: '', flipped: false};
    localStorage.setItem('list', JSON.stringify(items));
  }

}
