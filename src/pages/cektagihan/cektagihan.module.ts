import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CektagihanPage } from './cektagihan';

@NgModule({
  declarations: [
    CektagihanPage
  ],
  imports: [
    IonicPageModule.forChild(CektagihanPage),
  ],
  entryComponents:[
    CektagihanPage
  ]
})
export class CektagihanPageModule {}
