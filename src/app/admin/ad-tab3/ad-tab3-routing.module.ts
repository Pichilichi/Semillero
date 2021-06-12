import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdTab3Page } from './ad-tab3.page';

const routes: Routes = [
  {
    path: '',
    component: AdTab3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdTab3PageRoutingModule {}
