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
    path: "admin",
    loadChildren : () => import ("./features/admin/admin.module")
    .then( (m) => m.AdminModule)
  },
  {
    path: "coach",
    loadChildren : () => import ("./features/coach/coach.module")
    .then( (m) => m.CoachModule)
  },
  {
    path: "login/:id",
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
  {
    path: "rules",
    loadChildren : () => import ("./features/rules/rules.module")
    .then( (m) => m.RulesModule)
  },
  {
    path: "referee-apply",
    loadChildren : () => import ("./features/referee-apply/referee-apply.module")
    .then( (m) => m.RefereeApplyModule)
  },
  {
    path: "coach-apply",
    loadChildren : () => import ("./features/coach-apply/coach-apply.module")
    .then( (m) => m.CoachApplyModule)
  },
  {
    path: "team-apply",
    loadChildren : () => import ("./features/team-apply/team-apply.module")
    .then( (m) => m.TeamApplyModule)
  },
  {
    path: "faqs",
    loadChildren : () => import ("./features/faqs/faqs.module")
    .then( (m) => m.FaqsModule)
  },
  {
    path: "hotels",
    loadChildren : () => import ("./features/hotels/hotels.module")
    .then( (m) => m.HotelsModule)
  },
  {
    path: "sponsors",
    loadChildren : () => import ("./features/sponsors/sponsors.module")
    .then( (m) => m.SponsorsModule)
  },
  {
    path: "referee-admin",
    loadChildren : () => import ("./features/referee-admin/referee-admin.module")
    .then( (m) => m.RefereeAdminModule)
  },
  {
    path: "events",
    loadChildren : () => import ("./features/events/events.module")
    .then( (m) => m.EventsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
