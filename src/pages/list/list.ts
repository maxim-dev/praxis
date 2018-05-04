import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<{word: string, trans: string, flipped: boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.selectedItem = navParams.get('item');


    this.items = this.getItems();

  }

  itemTapped(event, item) {
    item.flipped = ! item.flipped;
  }

  itemPressed(event, item, index) {

    let cancel = {
      text: 'Отмена'
    };

    let delCard = {
      text: 'Удалить',
      handler: () => {
        this.items.splice(index, 1);

        localStorage.setItem('list', JSON.stringify(this.items));
      }
    };

    let confirm = this.alertCtrl.create({
      title: 'Удалить слово?',
      message: 'Вы действительно хотите удалить слово "'+ (item.flipped ? item.trans : item.word) +'" из списка?',
      buttons: [cancel, delCard]
    });

    confirm.present();

  }

  getItems() {
    let initItems = [
      {word: 'person', trans: 'человек', flipped: false},
      {word: 'school', trans: 'школа', flipped: true},
      {word: 'red', trans: 'красный', flipped: false},
      {word: 'boat', trans: 'лодка', flipped: false},
      {word: 'new', trans: 'новый', flipped: false}
    ];

    let storedItems = localStorage.getItem('list');

    if (storedItems) {
      return JSON.parse(storedItems);
    } else {
      localStorage.setItem('list', JSON.stringify(initItems));
    }

    return initItems;
  }
}
