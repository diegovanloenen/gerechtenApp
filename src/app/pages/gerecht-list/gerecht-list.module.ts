import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerechtListPageRoutingModule } from './gerecht-list-routing.module';

import { GerechtListPage } from './gerecht-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerechtListPageRoutingModule
  ],
  declarations: [GerechtListPage]
})
export class GerechtListPageModule {}
