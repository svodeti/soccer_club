import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsordetailComponent } from './sponsordetail.component';

const routes: Routes = [
  {
    path: "",
    component: SponsordetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SponsorDetailRoutingModule { }
