import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'music',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'musicDetail/:id',
            loadChildren: () =>
              import('../tab1/components/music-detail/music-detail.module').then(m => m.MusicDetailPageModule)
          }
        ]
      },
      {
        path: 'mv',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'mvDetail/:id',
            loadChildren: () =>
              import('../tab2/components/mv-detail/mv-detail.module').then(m => m.MvDetailPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/music',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/music',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
