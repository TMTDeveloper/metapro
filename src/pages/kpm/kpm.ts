import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { DecimalPipe } from '@angular/common';

/**
 * Generated class for the KprPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kpm',
  templateUrl: 'kpm.html',
})
export class KpmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pendapatan: number = 5000000;
  sukubunga: number =100;
  property: number = 100000000;
  uangmuka: number = 10;
jangkawaktu: number =1;

  brightness: number = 20;
  
  warmth: number = 1300;
  structure: any = {lower: 33, upper: 60};

  gotopage(page){
    this.navCtrl.push(page,{ pendapatan: this.pendapatan,
      sukubunga: this.sukubunga,
      property: this.property,
      uangmuka: this.uangmuka,
    jangkawaktu: this.jangkawaktu});
  }

}
