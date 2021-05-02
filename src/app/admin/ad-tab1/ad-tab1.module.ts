import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdTab1PageRoutingModule } from './ad-tab1-routing.module';

import { AdTab1Page } from './ad-tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdTab1PageRoutingModule
  ],
  declarations: [AdTab1Page]
})
export class AdTab1PageModule {}
