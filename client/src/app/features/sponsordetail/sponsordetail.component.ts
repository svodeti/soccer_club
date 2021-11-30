import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsordetail',
  templateUrl: './sponsordetail.component.html',
  styleUrls: ['./sponsordetail.component.scss']
})
export class SponsordetailComponent implements OnInit {

  sponsor = null
  constructor() { }

  
  ngOnInit(): void {
    this.sponsor = history.state.data;
    console.log(this.sponsor);
  }

}
