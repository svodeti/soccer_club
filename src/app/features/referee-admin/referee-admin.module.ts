import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefereeAdminRoutingModule } from './referee-admin-routing.module';
import { RefereeAdminComponent } from './referee-admin.component';

import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [RefereeAdminComponent],
  imports: [
    CommonModule,
    RefereeAdminRoutingModule,
    TabViewModule,
    PanelModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
    TableModule
  ]
})
export class RefereeAdminModule { }
