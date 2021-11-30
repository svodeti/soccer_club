import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamApplyComponent } from './team-apply.component';

const routes: Routes = [
  {
    path: '',
    component: TeamApplyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamApplyRoutingModule { }
