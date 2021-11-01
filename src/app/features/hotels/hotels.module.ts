import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';

import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [HotelsComponent],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    ButtonModule
  ]
})
export class HotelsModule { }
