import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaskapaiPage, SearchPage } from './maskapai';
import {AirportsPage} from './maskapai'
import { OrderBy } from './sortflight';
import { ExpandableComponent } from './expandable';
import { MultiPickerModule } from 'ion-multi-picker';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar'

@NgModule({
  declarations: [
    MaskapaiPage, AirportsPage,OrderBy,ExpandableComponent,SearchPage
  ],
  imports: [
    IonicPageModule.forChild(MaskapaiPage),MultiPickerModule,SlimLoadingBarModule.forRoot()
  ],
  entryComponents:[MaskapaiPage,AirportsPage,SearchPage],
  exports:[SlimLoadingBarModule]
})
export class MaskapaiPageModule {}
