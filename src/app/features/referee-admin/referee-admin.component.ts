import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referee-admin',
  templateUrl: './referee-admin.component.html',
  styleUrls: ['./referee-admin.component.scss']
})
export class RefereeAdminComponent implements OnInit {
  schedule:any = [];
  count:number = 0;
  referee:any;
  referees:any = [];
  dateTime;
  locations:any = [];
  location;

  constructor() { }

  ngOnInit(): void {
    this.referees = [
      {name: 'referee-1'},
      { name: 'referee-2'}
    ];
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
}
