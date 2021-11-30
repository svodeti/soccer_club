import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsComponent } from './sponsors.component';

import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [SponsorsComponent],
  imports: [
    CommonModule,
    SponsorsRoutingModule,
    CardModule
  ]
})
export class SponsorsModule { }
