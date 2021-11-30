import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    TabViewModule,
    CardModule,

  ]
})
export class MapsModule { }

