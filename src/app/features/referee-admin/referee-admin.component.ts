import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referee-admin',
  templateUrl: './referee-admin.component.html',
  styleUrls: ['./referee-admin.component.scss']
})
export class RefereeAdminComponent implements OnInit {
  refereeApplications:any = [];
  schedule:any = [];
  count:number = 0;
  referee:any;
  referees:any = [];
  dateTime;
  locations:any = [];
  location;

  constructor() { }

  ngOnInit(): void {

    let refereeApplications = JSON.parse(localStorage.getItem('applications'));
    
    this.refereeApplications = refereeApplications;
    this.refereeApplications.forEach(element => {
      if(element.approved){
        let x = { name: element.teamname};
        this.referees.push(x);
      }
    });
    this.locations = [
      { name: 'location-1'},
      { name: 'location-2'}
    ]
  }

  addSchedule(){
    if(this.referee && this.dateTime && this.location){
      this.count++;
      let x = { no:this.count, name : this.referee, time:this.dateTime, location:this.location}
      this.schedule.push(x);
    }
    else{
      alert("Fields cannot be empty")
    }
  }

  approve(teamId){
    this.refereeApplications.forEach(element => {
      if(element.teamId == teamId){
        element.approved = true;
      }
    });
    localStorage.setItem('applications', JSON.stringify(this.refereeApplications));
    this.referees = [];
    this.refereeApplications.forEach(element => {
      if(element.approved){
        let x = { name: element.teamname};
        this.referees.push(x);
      }
    });
  }
}
