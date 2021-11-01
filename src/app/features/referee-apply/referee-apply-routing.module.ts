import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefereeApplyComponent } from './referee-apply.component';

const routes: Routes = [
  {
    path: '',
    component: RefereeApplyComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefereeApplyRoutingModule { }
