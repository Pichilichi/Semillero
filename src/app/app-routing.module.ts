import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'ad-tabs',
    loadChildren: () => import('./admin/ad-tabs/ad-tabs.module').then( m => m.AdTabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },  {
    path: 'ad-tab1',
    loadChildren: () => import('./admin/ad-tab1/ad-tab1.module').then( m => m.AdTab1PageModule)
  },
  {
    path: 'modal-productos',
    loadChildren: () => import('./modal/modal-productos/modal-productos.module').then( m => m.ModalProductosPageModule)
  },
  {
    path: 'ad-tab2',
    loadChildren: () => import('./admin/ad-tab2/ad-tab2.module').then( m => m.AdTab2PageModule)
  },
  {
    path: 'ad-tab3',
    loadChildren: () => import('./admin/ad-tab3/ad-tab3.module').then( m => m.AdTab3PageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
