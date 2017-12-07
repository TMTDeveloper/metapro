import {
  DecimalPipe
} from '@angular/common';
import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  LoadingController,
  AlertController
} from 'ionic-angular';
import {
  HttpReqProvider
} from '../../providers/http-req/http-req';
import {
  AuthSingletonProvider
} from '../../providers/auth-singleton/auth-singleton';
import {
  SortgridPipe
} from '../../pipes/sortgrid/sortgrid';
/**
 * Generated class for the MultipaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-multipayment',
  templateUrl: 'multipayment.html',
})
export class MultipaymentPage {

  selecteddetail: any;
  paymentno: string = '';

  paymenttype: any[] = [{
      "paymentcode": "PLNPASCH",
      "paymentdesc": "PLN Bulanan"
    }, {
      "paymentcode": "PLNPRAH",
      "paymentdesc": "PLN Token"
    }, {
      "paymentcode": "ASRBPJSKS",
      "paymentdesc": "BPJS Kesehatan"
    }, {
      "paymentcode": "PGN",
      "paymentdesc": "PGN"
    }, {
      "paymentcode": "SPEEDY",
      "paymentdesc": "TELKOM/INDIHOME"
    }, {
      "paymentcode": "SPEEDY",
      "paymentdesc": "SPEEDY"
    }, {
      "paymentcode": "TVTLKMV",
      "paymentdesc": "TELKOMVISION"
    }, {
      "paymentcode": "TVINDVS",
      "paymentdesc": "INDOVISION"
    }, {
      "paymentcode": "TVINDVS",
      "paymentdesc": "OKEVISION"
    }, {
      "paymentcode": "TVINDVS",
      "paymentdesc": "TOP TV"
    }, {
      "paymentcode": "TVNEX",
      "paymentdesc": "NEXMEDIA"
    }, {
      "paymentcode": "WAKABBDG",
      "paymentdesc": "PDAM Bandung"
    }, {
      "paymentcode": "WABJN",
      "paymentdesc": "PDAM Kab. Bojonegoro"
    }, {
      "paymentcode": "WABONDO",
      "paymentdesc": "PDAM Kab. Bondowoso"
    }, {
      "paymentcode": "WAJMBR",
      "paymentdesc": "PDAM Kab. Jember"
    }, {
      "paymentcode": "WABGK",
      "paymentdesc": "PDAM Kab. Bangkalan"
    }, {
      "paymentcode": "WAMJK",
      "paymentdesc": "PDAM Kab. Mojokerto"
    }, {
      "paymentcode": "WASDA",
      "paymentdesc": "PDAM Kab. Sidoarjo"
    }, {
      "paymentcode": "WABAL",
      "paymentdesc": "PDAM Kab. Balangan"
    }, {
      "paymentcode": "WATAPIN",
      "paymentdesc": "PDAM Kab. Tapin"
    }, {
      "paymentcode": "WASBY",
      "paymentdesc": "PDAM Surabaya"
    }, {
      "paymentcode": "WAJAMBI",
      "paymentdesc": "PDAM Jambi"
    }
    // ,{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Ternate "
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Cilacap"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Bekasi"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Lampung"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Situbondo"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM PALYJA"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM PALEMBANG"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Banjarmasin"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Sleman"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Balikpapan"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Grobongan"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Malang"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Makassar"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Pontianak"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Muara enim"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Semarang"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Kendal"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Banyumas"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Mataram"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Boyolali"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Brebes"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Buleleng"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Kebumen"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Pekalongan"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Probolinggo"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Semarang"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Sragen"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Wonogiri"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Wonosobo"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Lombok Tengah"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Purbalingga"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Rembang"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Kranganyar"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Madiun"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Salatiga"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Surakarta"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Purworejo"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Bogor"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Bekasi"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Samarinda"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Padang"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Denpasar"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Tangerang"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM AETRA Tangerang"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Bogor, Cibinong, Depok"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Bengkulu"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM ATB Batam"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Banda Aceh"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Aceh Besar"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Aceh Jaya"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Bukit Tinggi"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Muara Bungo"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Jayapura"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Bontang"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Ngawi"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Malang"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Gresik"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Yogyakarta"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Pasuruan"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Sukabumi"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Cirebon"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Tasikmalaya"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Garut"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Ciamis"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Cianjur"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Cirebon"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Indramayu"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Karawang"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Kuningan"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Subang"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Tarakan"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Palu"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kab. Gunung Kidul"
    // },{
    //   "paymentcode":"PDAM",
    //   "paymentdesc":"PDAM Kota Palopo"
    // }
  ]

  authInfo: any;
  pin: string = '';
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private decimalPipe: DecimalPipe,
    public loadingCtrl: LoadingController, public httpreq: HttpReqProvider, public auth: AuthSingletonProvider, public alertctrl: AlertController) {
    this.authInfo = this.auth.authInfo;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MultipaymentPage');
    console.log(this.paymenttype[0].paymentcode);
  }

  inputCheck() {
    if (this.selecteddetail == undefined || this.paymentno == '') {
      this.showalert2("Harap Isi Jenis Tagihan dan Nomor Penagihan")
    } else if (this.selecteddetail !== undefined && this.paymentno !== '') {
      this.showPrompt();
    }

  }

  submitTagihan() {
    var paramsxpay = {
      xuid: 'XPM1760832',
      xpass: 'root',
      xprodukcode: this.selecteddetail.pulsaCode,
      xidpelanggan1: this.paymentno,
      xidpelanggan2: this.paymentno,
      xidpelanggan3: this.paymentno,
      xref1: 'tes'
    }
    var queryxpay = "";
    for (let key in paramsxpay) {
      queryxpay += encodeURIComponent(key) + "=" + encodeURIComponent(paramsxpay[key]) + "&";
    }
    this.httpreq.postreqxpay("secektagihan?", queryxpay).subscribe((response) => {
      this.loading.dismiss();
      this.showalert(JSON.stringify(response));
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
