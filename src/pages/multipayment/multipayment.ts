// import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController, ModalController, ViewController } from 'ionic-angular';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ViewController } from 'ionic-angular';
import { HttpReqProvider } from '../../providers/http-req/http-req';
import { AuthSingletonProvider } from '../../providers/auth-singleton/auth-singleton';
// import { SortgridPipe } from '../../pipes/sortgrid/sortgrid';


@IonicPage()
@Component({
  selector: 'page-multipayment',
  templateUrl: 'multipayment.html',
})
export class MultipaymentPage {

  selecteddetail: any;
  paymentno: string = '';


  databill: any;
  authInfo: any;
  pin: string = '';
  loading: any;
  datapayment: [{
    "trnType": string,
    "providerId": string,
    "productType": string,
    "productId": string,
    "distriPrice": number,
    "distriAdminFee": number,
    "distriFee": number,
    "descritprion": string
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public httpreq: HttpReqProvider, public auth: AuthSingletonProvider, public alertctrl: AlertController, public modalCtrl: ModalController) {
    this.authInfo = this.auth.authInfo;
    this.getData('T01');
  }

  openModal(response) {
    let myModal = this.modalCtrl.create(ConfirmationPage, response);
    myModal.onDidDismiss(data => {
      if (data.status == true) {
        this.payBill(data.data)
      }
    })
    myModal.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MultipaymentPage');


  }

  inputCheck() {
    if (this.selecteddetail == undefined || this.paymentno == '') {
      this.showalert2("Harap Isi Jenis Tagihan dan Nomor Penagihan")
    } else if (this.selecteddetail !== undefined && this.paymentno !== '') {
      this.showPrompt();
    }

  }

  getData(trntype: string) {
    if (trntype == 'T01') {
      this.showloading();
      this.loading.present();
    }
    var paramsxpay = {
      xuid: 'XPM1760832',
      xpass: 'root',
      xtrntype: trntype
    }
    var queryxpay = "";
    for (let key in paramsxpay) {
      queryxpay += encodeURIComponent(key) + "=" + encodeURIComponent(paramsxpay[key]) + "&";
    }
    this.httpreq.postreqxpay("xpay.ppob/trntype?", queryxpay).subscribe((response) => {
      if (response.STATUS == 'OK' && trntype == 'T01') {
        this.datapayment = response.DATA;
        this.getData('T02');
      } else if (response.STATUS == 'OK' && trntype == 'T02') {
        console.log(response.DATA)
        this.datapayment.push(response.DATA[0]);
        console.log(this.datapayment)
        this.loading.dismiss();
      }
      console.log(JSON.stringify(response))
    }, (error) => {
      this.loading.dismiss();
      this.showalert("KONEKSI BERMASALAH, HARAP ULANGI BEBERAPA SAAT LAGI");
    })
  }

  payBill(data) {
    console.log("iwashere")
    this.showloading();
    this.loading.present();
    var paramsxpay = {
      xuid: 'XPM1760832',
      xpass: 'root',
      xproductcode: data[0].kodeProduk,
      xidpelanggan1: data[0].idpelanggan1,
      xidpelanggan2: data[0].idpelanggan1,
      xidpelanggan3: '',
      xnominal: data[0].nominal,
      xref1: data[0].ref1,
      xref2: data[0].ref2,
      xref3: data[0].ref3
    }
    var queryxpay = "";
    for (let key in paramsxpay) {
      queryxpay += encodeURIComponent(key) + "=" + encodeURIComponent(paramsxpay[key]) + "&";
    }
    this.httpreq.postreqxpay("xpay.payment/payment?", queryxpay).subscribe((response) => {
      if (response.STATUS == 'OK') {
        this.openReceipt(response);
        console.log(JSON.stringify(response))
        this.loading.dismiss();
      } else if (response.STATUS !== 'OK') {
        this.showalert(response.MESSAGE)
      }
    }, (error) => {
      this.showalert("KONEKSI BERMASALAH, HARAP ULANGI BEBERAPA SAAT LAGI");
    })
  }

  openReceipt(receipt) {
    let myModal = this.modalCtrl.create(ReceiptPage, receipt);
    myModal.onDidDismiss(data => {
      if (data.status == true) {
        this.payBill(data.data)
      }
    })
    myModal.present();
  }

  submitTagihan() {
    var paramsxpay = {
      xuid: 'XPM1760832',
      xpass: 'root',
      xproductcode: this.selecteddetail.productId,
      xidpelanggan1: this.paymentno,
      xidpelanggan2: this.paymentno,
      xidpelanggan3: this.paymentno,
    }
    var queryxpay = "";
    for (let key in paramsxpay) {
      queryxpay += encodeURIComponent(key) + "=" + encodeURIComponent(paramsxpay[key]) + "&";
    }
    this.httpreq.postreqxpay("xpay.payment/inquery?", queryxpay).subscribe((response) => {
      if (response.STATUS == 'OK') {
        console.log(JSON.stringify(response))
        this.openModal(response);
        this.loading.dismiss();
      } else if (response.STATUS !== 'OK') {
        this.showalert(response.MESSAGE)
      }


    }, (error) => {
      this.showalert("KONEKSI BERMASALAH, HARAP ULANGI BEBERAPA SAAT LAGI");
    })
  }
  showalert(msg) {
    let alert = this.alertctrl.create({
      title: 'NOTIFICATION',
      subTitle: msg,
      buttons: [{
        text: 'Ok',
        role: 'ok',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
    });

    alert.present();

  }
  showalert2(msg) {
    let alert = this.alertctrl.create({
      title: 'NOTIFICATION',
      subTitle: msg,
      buttons: [{
        text: 'Ok',
        role: 'ok',
        handler: () => {}
      }]
    });

    alert.present();

  }
  showPrompt() {
    let prompt = this.alertctrl.create({
      title: 'PIN',
      message: "Enter Your PIN",
      inputs: [{
        name: 'PIN',
        placeholder: '123456',
        type: 'password',
        max: 6,
        min: 6
      }, ],
      buttons: [{
          text: 'Confirm',
          handler: data => {
            this.pin = data.PIN;
            this.showloading();
            this.loading.present();
            this.submitTagihan();
          }
        },
        {
          text: 'Cancel',
          handler: data => {}
        }

      ]
    });
    prompt.present();
  }
  showloading(msg ? ) {
    this.loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Please Wait...'
    });
  }
}

@Component({
  templateUrl: 'confirmation.html'
})
export class ConfirmationPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.data = this.navParams.get('DATA')
    console.log(this.data)
  }
  payBill() {
    this.viewCtrl.dismiss({
      status: true,
      data: this.data
    });
  }
  closeModal(name) {
    this.viewCtrl.dismiss({
      status: false,
      data: undefined
    });
  }
}

@Component({
  templateUrl: 'receipt.html'
})
export class ReceiptPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.data = this.navParams.get('DATA')
    console.log(this.data)
  }
  payBill() {
    this.viewCtrl.dismiss({
      status: true,
      data: this.data
    });
  }
  closeModal(name) {
    this.viewCtrl.dismiss({
      status: false,
      data: undefined
    });
  }
} 