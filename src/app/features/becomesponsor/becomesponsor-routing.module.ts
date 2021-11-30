import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BecomesponsorComponent } from './becomesponsor.component';

const routes: Routes = [
  {
    path: "",
    component: BecomesponsorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BecomeSponsorsRoutingModule { }
