import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorDetailRoutingModule } from './sponsordetail-routing.module';
import { SponsordetailComponent } from './sponsordetail.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [SponsordetailComponent],
  imports: [
    CommonModule,
    SponsorDetailRoutingModule,
    InputTextModule,
    ButtonModule
  ]
})
export class SponsorDetailModule { }
