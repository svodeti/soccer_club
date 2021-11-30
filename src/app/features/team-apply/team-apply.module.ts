
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamApplyRoutingModule } from './team-apply-routing.module';
import { TeamApplyComponent } from './team-apply.component';


import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';

import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


export class myModule { }


@NgModule({
  declarations: [TeamApplyComponent],
  imports: [
    CommonModule,
    TeamApplyRoutingModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeamApplyModule { }
