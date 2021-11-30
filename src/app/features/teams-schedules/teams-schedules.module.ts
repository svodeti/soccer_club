import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsSchedulesRoutingModule } from './teams-schedules-routing.module';
import { TeamsSchedulesComponent } from './teams-schedules.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [TeamsSchedulesComponent],
  imports: [
    CommonModule,
    TeamsSchedulesRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class TeamsSchedulesModule { }
