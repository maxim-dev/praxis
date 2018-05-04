import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  item: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {


    this.item = {trans: '', word: '', flipped: false};






  }

  addCard() {


    let list = localStorage.getItem('list');
    let items = JSON.parse(list);
    items. unshift(this.item);
    localStorage.setItem('list', JSON.stringify(items));
    this.item = {word: '', trans: '', flipped: false};

    this.alertCtrl.create({
      title: 'Слово добавлено',
      subTitle: 'Перейдите в список слов в меню',
      buttons: ['Ok']
    }).present();
  }

}
