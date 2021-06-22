import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerechtDetailsPageRoutingModule } from './gerecht-details-routing.module';

import { GerechtDetailsPage } from './gerecht-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerechtDetailsPageRoutingModule
  ],
  declarations: [GerechtDetailsPage]
})
export class GerechtDetailsPageModule {}
