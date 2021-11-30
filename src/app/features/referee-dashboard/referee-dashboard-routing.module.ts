import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefereeDashboardModule } from './referee-dashboard.module';

const routes: Routes = [
  {
    path: '',
    component: RefereeDashboardModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefereeDashboardRoutingModule { 

  constructor(){}

  ngOnInit(){
    
  }
}
