import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { BecomeSponsorsRoutingModule } from './becomesponsor-routing.module';
import { BecomesponsorComponent } from './becomesponsor.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [BecomesponsorComponent],
  imports: [
    CommonModule,
    BecomeSponsorsRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ]
})
export class BecomeSponsorModule { }
