import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{word: string, trans: string, flipped: boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = this.getItems();

    /*
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    */
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
