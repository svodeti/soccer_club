import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefereeAdminComponent } from './referee-admin.component';

const routes: Routes = [
  {
    path: '',
    component: RefereeAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefereeAdminRoutingModule { }
