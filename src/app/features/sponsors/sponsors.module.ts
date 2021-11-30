import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsComponent } from './sponsors.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [SponsorsComponent],
  imports: [
    CommonModule,
    SponsorsRoutingModule,
    InputTextModule,
    ButtonModule
  ]
})
export class SponsorsModule { }
