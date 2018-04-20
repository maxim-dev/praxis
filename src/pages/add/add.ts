import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  selectedItem: any;
  icons: string[];
  items: Array<{word: string, trans: string, flipped: boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [
      {word: 'person', trans: 'человек', flipped: false},
      {word: 'school', trans: 'школа', flipped: true},
      {word: 'red', trans: 'красный', flipped: false},
      {word: 'boat', trans: 'лодка', flipped: false},
      {word: 'new', trans: 'новый', flipped: false}
    ];





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
}