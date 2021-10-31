import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefereeApplyRoutingModule } from './referee-apply-routing.module';

import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RefereeApplyRoutingModule,
    InputTextModule,
    InputNumberModule,
  ]
})
export class RefereeApplyModule { }
