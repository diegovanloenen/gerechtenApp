import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerechtListPage } from './gerecht-list.page';

const routes: Routes = [
  {
    path: '',
    component: GerechtListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerechtListPageRoutingModule {}
