import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';





@IonicPage()
@Component({
  selector: 'page-cektagihan',
  templateUrl: 'cektagihan.html',
})
export class CektagihanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CektagihanPage');
  }

  openmodal() {
    let myModal = this.modalCtrl.create(ModalTagihanPage);
    myModal.present();
  }

}

@Component({
  templateUrl: 'modaltagihan.html',
})
export class ModalTagihanPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  

}
