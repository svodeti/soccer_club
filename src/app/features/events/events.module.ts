import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    CardModule,
    TabViewModule
  ]
})
export class EventsModule { }
