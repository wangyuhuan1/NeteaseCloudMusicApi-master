import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MvDetailPageRoutingModule } from './mv-detail-routing.module';

import { MvDetailPage } from './mv-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MvDetailPageRoutingModule
  ],
  declarations: [MvDetailPage]
})
export class MvDetailPageModule {}
