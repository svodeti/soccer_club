import { Component, OnInit } from '@angular/core';
import { RefereeService } from 'src/app/services/referee.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.scss']
})
export class RefereeComponent implements OnInit {

  sponsors: any;
  currentTutorial = null;
  currentIndex = -1;
  headers = ["Name", "Mobile no:", "Email id", "Acceptance State"];

  constructor(private refereeService: RefereeService,private router: Router) { }

  ngOnInit() {
    this.retrieveList();
  }

  retrieveList() {
    this.refereeService.retrieveList()
    .subscribe(
      data => {
        this.sponsors = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  setActiveTutorial(tutorial, index) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
    console.log(tutorial+ " "+index);
    this.router.navigateByUrl('/referee-details',{state: {data: tutorial}});
  }

}
