import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdTab2Page } from './ad-tab2.page';

const routes: Routes = [
  {
    path: '',
    component: AdTab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdTab2PageRoutingModule {}
