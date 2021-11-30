import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefereedetailComponent } from './refereedetail.component';

const routes: Routes = [
  {
    path: "",
    component: RefereedetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RefereeDetailRoutingModule { }
