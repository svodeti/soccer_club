import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsSchedulesComponent } from './teams-schedules.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsSchedulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsSchedulesRoutingModule { }
