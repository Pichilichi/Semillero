import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdTabsPage } from './ad-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AdTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdTabsPageRoutingModule {}
