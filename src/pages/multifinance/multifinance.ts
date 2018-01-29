import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

/**
 * Generated class for the MultifinancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-multifinance',
  templateUrl: 'multifinance.html',
})
export class MultifinancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MultifinancePage');
  }

  openmodal() {
    let myModal = this.modalCtrl.create(ModalMultiFinance);
    myModal.present();
  }

}

@Component({
  templateUrl: 'modalmultifinance.html',
})
export class ModalMultiFinance {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MultifinancePage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
