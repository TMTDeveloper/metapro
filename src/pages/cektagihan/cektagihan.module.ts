import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CektagihanPage } from './cektagihan';
import { ModalTagihanPage } from './cektagihan';

@NgModule({
  declarations: [
    CektagihanPage,ModalTagihanPage
  ],
  imports: [
    IonicPageModule.forChild(CektagihanPage),
  ],
  entryComponents:[
    CektagihanPage,ModalTagihanPage
  ]
})
export class CektagihanPageModule {}
