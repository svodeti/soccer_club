import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';


@NgModule({
  declarations: [CoachComponent],
  imports: [
    CommonModule,
    CoachRoutingModule
  ]
})
export class CoachModule { }
