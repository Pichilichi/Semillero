import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdTabsPage } from './ad-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AdTabsPage,
    children: [
      {
        path: 'ad-tab1',
        loadChildren: () => import('../ad-tab1/ad-tab1.module').then(m => m.AdTab1PageModule)
      },
      {
        path: 'ad-tab2',
        loadChildren: () => import('../ad-tab2/ad-tab2.module').then(m => m.AdTab2PageModule)
      },
      {
        path: '',
        redirectTo: '/ad-tabs/ad-tab1',
        pathMatch: 'full'
      },
    ]
  },
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
