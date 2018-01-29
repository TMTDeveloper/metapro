import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
// import { DecimalPipe } from '@angular/common';
// import {SortgridPipe} from '../../pipes/sortgrid/sortgrid';
// import { DatePipe } from '@angular/common';



@IonicPage()
@Component({
  selector: 'page-saldomodal',
  templateUrl: 'saldomodal.html',
})
export class SaldomodalPage {

data: any[]=this.navParams.get('DATA');
saldo: any[]=this.navParams.get('SALDO');

// constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController
//   ,private decimalPipe: DecimalPipe) {
//   }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  closeModal() {
    console.log(this.data);
    console.log(this.saldo);
    this.viewCtrl.dismiss();
  }

}
