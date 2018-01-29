import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultifinancePage } from './multifinance';
import { ModalMultiFinance } from './multifinance';

@NgModule({
  declarations: [
    MultifinancePage,ModalMultiFinance
  ],
  imports: [
    IonicPageModule.forChild(MultifinancePage),
  ],
  entryComponents: [
    MultifinancePage,ModalMultiFinance
  ],
})
export class MultifinancePageModule {}
