import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultipaymentPage } from './multipayment';
import {ConfirmationPage} from './multipayment'
import {ReceiptPage} from './multipayment'
@NgModule({
  declarations: [
    MultipaymentPage, ConfirmationPage,ReceiptPage
  ],
  imports: [
    IonicPageModule.forChild(MultipaymentPage),
  ],
  entryComponents:[ConfirmationPage,ReceiptPage]
})
export class MultipaymentPageModule {}
