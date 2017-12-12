import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaskapaiPage } from './maskapai';
import {AirportsPage} from './maskapai'

@NgModule({
  declarations: [
    MaskapaiPage, AirportsPage
  ],
  imports: [
    IonicPageModule.forChild(MaskapaiPage),
  ],
  entryComponents:[MaskapaiPage,AirportsPage]
})
export class MaskapaiPageModule {}
