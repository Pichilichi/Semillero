import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdTab3PageRoutingModule } from './ad-tab3-routing.module';

import { AdTab3Page } from './ad-tab3.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdTab3PageRoutingModule,
    ChartsModule,
  ],
  declarations: [AdTab3Page]
})
export class AdTab3PageModule {}
