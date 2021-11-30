import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-schedules',
  templateUrl: './teams-schedules.component.html',
  styleUrls: ['./teams-schedules.component.scss']
})
export class TeamsSchedulesComponent implements OnInit {

  teamApplications:any = [];
  teamSchedule:any = []
  products = [];
  schedule = []
  flag:boolean;
  
  constructor() {
    this.flag = true;
   }

  ngOnInit(): void {
    let teamApplications = JSON.parse(localStorage.getItem('applications'));
    let teamSchedule = JSON.parse(localStorage.getItem('teamSchedule'));
    this.teamApplications = teamApplications;
    this.teamSchedule = teamSchedule;
  }

  seeSchedule(name){
    this.teamSchedule.forEach(element => {
      if(element.teamA == name || element.teamB == name){
        this.schedule.push(element);
      }
    });
    this.flag = false;

  }
  back(){
    this.flag = true
  }
}
