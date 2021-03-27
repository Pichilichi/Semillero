import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdTabsPageRoutingModule } from './ad-tabs-routing.module';

import { AdTabsPage } from './ad-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdTabsPageRoutingModule
  ],
  declarations: [AdTabsPage]
})
export class AdTabsPageModule {}
