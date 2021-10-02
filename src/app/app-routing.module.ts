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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
