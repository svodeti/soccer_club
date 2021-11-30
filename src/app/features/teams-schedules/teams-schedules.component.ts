import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-schedules',
  templateUrl: './teams-schedules.component.html',
  styleUrls: ['./teams-schedules.component.scss']
})
export class TeamsSchedulesComponent implements OnInit {

  products = [];
  schedule = []
  flag:boolean;
  
  constructor() {
    this.flag = true;
   }

  ngOnInit(): void {
    
    this.products = [
      {
        code: "A1", team: "Total Ginga Academy 2011 Yellow", coach: "Warner Roght", color: "Yellow", schedule: ""
      },
      {
        code: "A2", team: "Alliance Cincinnati Gold B2011", coach: "James", color: "Red", schedule: ""
      },
      {
        code: "A3", team: "NWC Alliance 2011 Boys Chelsea1", coach: "Ashten Forde", color: "Orange", schedule: ""
      },
      {
        code: "A4", team: "Nemesis B11", coach: "Ashten Forde", color: "Orange", schedule: ""
      },
      {
        code: "A5", team: "Warrior B11 Red", coach: "Ashten Forde", color: "Orange", schedule: ""
      },
    ];
    this.schedule = [
      {
        no: 1, team1: "Total Ginga Academy 2011 Yellow", team2: "Alliance Cincinnati Gold B2011", time: "Nov 5, 2021, 8:00AM", location: "Tempe"
      },
      {
        no: 2, team1: "Warrior B11 Red", team2: "Total Ginga Academy 2011 Yellow", time: "Nov 6, 2021, 12:00PM", location: "Tempe"
      },
      {
        no: 3, team1: "Nemesis B11", team2: "Total Ginga Academy 2011 Yellow", time: "Nov 7, 2021, 8:00PM", location: "Tempe"
      },
    ]
  }

  seeSchedule(){
    this.flag = false;

  }
  back(){
    this.flag = true
  }
}
