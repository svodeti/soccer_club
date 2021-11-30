import { Component, OnInit } from '@angular/core';
import { SponsorService } from 'src/app/services/sponsor.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  sponsors: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  headers = ["Company Name", "Representative Name","Sponsoring Amount", "Email id", "Acceptance State"];

  constructor(private sponsorService: SponsorService,private router: Router) { }
  ngOnInit() {
    this.initsponsors();
    this.retrieveList();
  }

  initsponsors() {
    this.sponsors = [
      {
        name: "Company A",
      representative_name: "Daniels",
      mobile_number: "1234567",
      email_id: "23456u@jkasd",
      income: "2345678",
      sponsoring_amount: "23456789",
      comments: "comments",
      previous_sponsorships: "previos",
      address: "addres",
      acceptance_status: "PENDING",
      },
      {
        name: "Company B",
      representative_name: "Ben",
      mobile_number: "1234567",
      email_id: "23456u@jkasd",
      income: "2345678",
      sponsoring_amount: "23456789",
      comments: "comments",
      previous_sponsorships: "previos",
      address: "addres",
      acceptance_status: "PENDING",
      },
    ]
  }

  retrieveList() {
    this.sponsorService.retrieveList()
    .subscribe(
      data => {
        this.sponsors = this.sponsors.concat(data);
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
    this.router.navigateByUrl('/sponsor-details',{state: {data: tutorial}});
  }

  refreshList() {
    this.initsponsors();
    this.retrieveList();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }
}
