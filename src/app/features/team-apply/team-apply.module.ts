import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamApplyRoutingModule } from './team-apply-routing.module';
import { TeamApplyComponent } from './team-apply.component';


@NgModule({
  declarations: [TeamApplyComponent],
  imports: [
    CommonModule,
    TeamApplyRoutingModule
  ]
})
export class TeamApplyModule { }
