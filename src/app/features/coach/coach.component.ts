import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  loginScreen(){
    this.router.navigate(['/login'])
  }

  signUpScreen(){
    this.router.navigate(['/signup'])
  }
}
