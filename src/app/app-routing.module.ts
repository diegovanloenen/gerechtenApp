import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/gerecht-list/gerecht-list.module').then(m => m.GerechtListPageModule) },
  { path: 'gerecht', loadChildren: () => import('./pages/gerecht-details/gerecht-details.module').then(m => m.GerechtDetailsPageModule) },
  { path: 'gerecht/:id', loadChildren: () => import('./pages/gerecht-details/gerecht-details.module').then(m => m.GerechtDetailsPageModule) },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }