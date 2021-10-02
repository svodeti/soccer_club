import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'', redirectTo: '', pathMatch: "full"
  },
  {
    path: "",
    component: AppComponent
    // loadChildren : () => import ("./features/coach/coach.module")
    // .then( (m) => m.CoachModule)
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
