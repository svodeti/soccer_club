import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefereeDetailRoutingModule } from './refereedetail-routing.module';
import { RefereedetailComponent } from './refereedetail.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [RefereedetailComponent],
  imports: [
    CommonModule,
    RefereeDetailRoutingModule,
    InputTextModule,
    ButtonModule
  ]
})

export class RefereeDetailModule { }
