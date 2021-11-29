import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefereeDashboardRoutingModule } from './referee-dashboard-routing.module';
import { RefereeDashboardComponent } from './referee-dashboard.component';


@NgModule({
  declarations: [RefereeDashboardComponent],
  imports: [
    CommonModule,
    RefereeDashboardRoutingModule
  ]
})
export class RefereeDashboardModule { }
