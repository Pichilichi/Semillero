import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdTab1Page } from './ad-tab1.page';

const routes: Routes = [
  {
    path: '',
    component: AdTab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdTab1PageRoutingModule {}
