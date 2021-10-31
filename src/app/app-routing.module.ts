import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path:'', redirectTo: '/home', pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "apply",
    loadChildren : () => import ("./features/apply/apply.module")
    .then( (m) => m.ApplyModule)
  },
  {
    path: "coach",
    loadChildren : () => import ("./features/coach/coach.module")
    .then( (m) => m.CoachModule)
  },
  {
    path: "login",
    loadChildren : () => import ("./features/login/login.module")
    .then( (m) => m.LoginModule)
  },
  {
    path: "referee",
    loadChildren : () => import ("./features/referee/referee.module")
    .then( (m) => m.RefereeModule)
  },
  {
    path: "teams_schedules",
    loadChildren : () => import ("./features/teams-schedules/teams-schedules.module")
    .then( (m) => m.TeamsSchedulesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
