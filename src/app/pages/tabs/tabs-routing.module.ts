import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'historic',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'historic',
        loadChildren: () => import('../historic/historic.module').then( m => m.HistoricPageModule)
      },
      {
        path: 'transfer',
        loadChildren: () => import('../transfer/transfer.module').then( m => m.TransferPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
