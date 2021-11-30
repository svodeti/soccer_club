import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  cars:any = [
    {
			id: "1.jpg",
		},
		{
			id: "2.jpg",
		},
		{
			id: "3.jpg",
		}
  ]

  ngOnInit(): void {
  }
  navigateRules(){
    this.router.navigateByUrl('/rules')
  }
  navigateEvents(){
    this.router.navigateByUrl('/events')
  }

}
