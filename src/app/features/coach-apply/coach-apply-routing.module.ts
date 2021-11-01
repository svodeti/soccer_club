import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoachComponent } from '../coach/coach.component';
import { CoachApplyComponent } from './coach-apply.component';
import { CoachApplyModule } from './coach-apply.module';

const routes: Routes = [
  {
    path: '',
    component: CoachApplyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachApplyRoutingModule { }
