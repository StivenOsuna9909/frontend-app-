import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'main',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'welcome'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/inicio/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/inicio/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/inicio/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'historic',
    loadChildren: () => import('./pages/historic/historic.module').then( m => m.HistoricPageModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./pages/transfer/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
