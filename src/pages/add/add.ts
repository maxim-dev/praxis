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
    console.log(this.item);

    localStorage.setItem('card', JSON.stringify(this.item));
  }
}
