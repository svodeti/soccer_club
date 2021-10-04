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
    path: "signup",
    loadChildren : () => import ("./features/signup/signup.module")
    .then( (m) => m.SignupModule)
  },
  {
    path: "referee",
    loadChildren : () => import ("./features/referee/referee.module")
    .then( (m) => m.RefereeModule)
  },
  {
    path: "player",
    loadChildren : () => import ("./features/player/player.module")
    .then( (m) => m.PlayerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
