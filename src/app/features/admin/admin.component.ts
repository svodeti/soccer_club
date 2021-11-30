import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  teamApplications:any = [];
  schedule:any=[];
  teams:any = [];
  locations:any = [];
  location:any;
  dateTime:any ;
  teamA:any;
  teamB:any;
  count:number = 0;
  constructor(private router: Router) {
  
    this.locations = [
      { name: 'location-1'},
      { name: 'location-2'}
    ]
   }

  ngOnInit(): void {
    //this.router.navigateByUrl('/login')
    let teamApplications = JSON.parse(localStorage.getItem('applications'));
    
    this.teamApplications = teamApplications;
    this.teamApplications.forEach(element => {
      if(element.approved){
        let x = { name: element.teamname};
        this.teams.push(x);
      }
    });
  }
  addSchedule(){
    if(this.teamA && this.teamB && this.dateTime && this.location){
      this.count++;
      let x = { no:this.count, teamA : this.teamA,teamB: this.teamB, time:this.dateTime, location:this.location}
      this.schedule.push(x);
    }
    else{
      alert("Fields cannot be empty")
    }
  }
  approve(teamId){
    this.teamApplications.forEach(element => {
      if(element.teamId == teamId){
        element.approved = true;
      }
    });
    localStorage.setItem('applications', JSON.stringify(this.teamApplications));
    this.teams = [];
    this.teamApplications.forEach(element => {
      if(element.approved){
        let x = { name: element.teamname};
        this.teams.push(x);
      }
    });
  }

}
