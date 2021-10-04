import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [CoachComponent],
  imports: [
    CommonModule,
    CoachRoutingModule,
    CardModule,
    ButtonModule
  ]
})
export class CoachModule { }
