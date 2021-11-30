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
    path: "sponsors",
    loadChildren : () => import ("./features/sponsors/sponsors.module")
    .then( (m) => m.SponsorsModule)
  },
  {
    path: "become-sponsor",
    loadChildren : () => import ("./features/becomesponsor/becomesponsor.module")
    .then( (m) => m.BecomeSponsorModule)
  },
  {
    path: "sponsor-details",
    loadChildren : () => import ("./features/sponsordetail/sponsordetail.module")
    .then( (m) => m.SponsorDetailModule)
  },
  {
    path: "referee-details",
    loadChildren : () => import ("./features/refereedetail/refereedetail.module")
    .then( (m) => m.RefereeDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
