import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-referee-apply',
  templateUrl: './referee-apply.component.html',
  styleUrls: ['./referee-apply.component.scss']
})
export class RefereeApplyComponent implements OnInit {

  
  number1 = [];

  refereeForm:FormGroup;


  refereeApplications:any=[];

  constructor(private fb:FormBuilder) {


    this.number1 = [
      {name: '0'},
      {name: '1'},
      {name: '2'},
      {name: '3'},
      {name: '4'},
      {name: '5'}
    
    ];
   }

  ngOnInit(): void {

    this.refereeForm= this.fb.group({
      USSFNumber: [],
      firstname: [],
      lastname: [],
      state: [],
      agebracket: [],
      refereegrade: [],
      exp: [],

      approved:[false]
    });
    let applications = localStorage.getItem("applications");
    if(applications)
      this.refereeApplications = JSON.parse(applications);
    
    console.log(this.refereeApplications)
  }
  
  

}
