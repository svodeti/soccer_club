import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefereeApplyRoutingModule } from './referee-apply-routing.module';

import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';

import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RefereeApplyRoutingModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RefereeApplyModule { }
