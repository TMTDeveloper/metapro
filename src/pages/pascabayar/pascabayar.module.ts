import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PascabayarPage } from './pascabayar';
import { ModalPascaBayar } from './pascabayar';

@NgModule({
  declarations: [
    PascabayarPage,ModalPascaBayar,
  ],
  imports: [
    IonicPageModule.forChild(PascabayarPage),
  ],
  entryComponents: [
    ModalPascaBayar
  ]
})
export class PascabayarPageModule {}
