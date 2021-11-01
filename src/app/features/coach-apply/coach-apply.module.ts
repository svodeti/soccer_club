import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachApplyRoutingModule } from './coach-apply-routing.module';
import { CoachApplyComponent } from './coach-apply.component';


@NgModule({
  declarations: [CoachApplyComponent],
  imports: [
    CommonModule,
    CoachApplyRoutingModule
  ]
})
export class CoachApplyModule { }
