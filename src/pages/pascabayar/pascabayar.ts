import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the PascabayarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pascabayar',
  templateUrl: 'pascabayar.html',
})
export class PascabayarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PascabayarPage');
  }

  openmodal() {
    let myModal = this.modalCtrl.create(ModalPascaBayar);
    myModal.present();
  }

}

@Component({
  templateUrl: 'modalpascabayar.html',
})
export class ModalPascaBayar {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PascabayarPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
