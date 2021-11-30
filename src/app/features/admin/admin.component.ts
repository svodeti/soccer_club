import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  schedule:any=[];
  teams:any = [];
  locations:any = [];
  location:any;
  dateTime:any ;
  teamA:any;
  teamB:any;
  count:number = 0;
  constructor(private router: Router) {
    this.teams = [
      { name: 'team-1'},
      { name: 'team-2'}
    ]
    this.locations = [
      { name: 'location-1'},
      { name: 'location-2'}
    ]
   }

  ngOnInit(): void {
    //this.router.navigateByUrl('/login')
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

}
