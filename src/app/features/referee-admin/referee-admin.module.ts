import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefereeAdminRoutingModule } from './referee-admin-routing.module';
import { RefereeAdminComponent } from './referee-admin.component';

import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [RefereeAdminComponent],
  imports: [
    CommonModule,
    RefereeAdminRoutingModule,
    TabViewModule,
    PanelModule,
    ButtonModule
  ]
})
export class RefereeAdminModule { }
