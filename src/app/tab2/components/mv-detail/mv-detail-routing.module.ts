import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MvDetailPage } from './mv-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MvDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MvDetailPageRoutingModule {}
