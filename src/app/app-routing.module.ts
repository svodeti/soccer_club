import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
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
    path: "rules",
    loadChildren : () => import ("./features/rules/rules.module")
    .then( (m) => m.RulesModule)
  },
  {
    path: "referee-apply",
    loadChildren : () => import ("./features/referee-apply/referee-apply.module")
    .then( (m) => m.RefereeApplyModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
