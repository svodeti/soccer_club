import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsSchedulesRoutingModule } from './teams-schedules-routing.module';
import { TeamsSchedulesComponent } from './teams-schedules.component';


@NgModule({
  declarations: [TeamsSchedulesComponent],
  imports: [
    CommonModule,
    TeamsSchedulesRoutingModule
  ]
})
export class TeamsSchedulesModule { }
