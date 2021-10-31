import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefereeRoutingModule } from './referee-routing.module';
import { RefereeComponent } from './referee.component';


@NgModule({
  declarations: [RefereeComponent],
  imports: [
    CommonModule,
    RefereeRoutingModule
  ]
})
export class RefereeModule { }
