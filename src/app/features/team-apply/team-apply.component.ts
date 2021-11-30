import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-team-apply',
  templateUrl: './team-apply.component.html',
  styleUrls: ['./team-apply.component.scss']
})



export class TeamApplyComponent implements OnInit {

  teamApplications:any=[];

  teamForm:FormGroup;

  groups = [];

  playlevel = [];

  color = [];

  contact = [];

  number = [];

  year = [];

  season = [];

  result = [];

  constructor(private fb:FormBuilder) {
      this.groups = [
          {name: 'Boys U08'},
          {name: 'Boys U11'},
          {name: 'Boys U13'},
          {name: 'Boys U18'},
          {name: 'Boys 48+'},
          {name: 'Girls U08'},
          {name: 'Girls U11'},
          {name: 'Girls U13'},
          {name: 'Girls U18'},
          {name: 'Girls 48+'},
      ];

      this.playlevel = [
        {name: 'Upper (Gold)'},
        {name: 'Lower (Red)'}

    ];

    this.color = [
      {name: 'Gold'},
      {name: 'White/Red'},
      {name: 'Black/White'},
      {name: 'Black/Silver'},
      {name: 'Black/Red'},
      {name: 'White/Blue'},
      {name: 'Black/Gold'},
      {name: 'Black/yellow'}
  ];
  

  this.contact = [
    {name: 'Head Coach'},
    {name: 'Asst Coach'},
    {name: 'Team rep'}

];
this.number = [
  {name: '0'},
  {name: '1'},
  {name: '2'},
  {name: '3'},
  {name: '4'},
  {name: '5'}

];
this.year = [
  {name: '2020'},
  {name: '2021'},
  {name: '2022'}

];

this.season = [
  {name: 'fall'},
  {name: 'spring'}

];

this.result = [
  {name: 'Did Not Advance'},
  {name: 'Quater Finalist'},
  {name: 'Semi finalist'},
  {name: 'Finalist'},
  {name: 'Champion'}


];

}



  ngOnInit(): void {
    this.teamForm = this.fb.group({
      teamId:[],
      agegroup :[],
      teamname :[],
      oldestplayer : [],
      coachname:[],
      teamcity:[],
      teamstate:[],
      teamwebsite: [],
      clubname: [],
      association: [],
      league: [],
      playlevel: [],
      primaryjerseycolor: [],
      altjerseycolor: [],
      contactname:[],
      email:[],
      phone:[],
      performance:[],
      approved:[false]
    });
    let applications = localStorage.getItem("applications");
    if(applications)
      this.teamApplications = JSON.parse(applications);
  }

  submit(){
    let teamApplications:any = [];
    let number = this.randomNumber();
    this.teamForm.controls.teamId.setValue(this.teamApplications.length+1);
    this.teamForm.controls.performance.setValue(number);
    teamApplications.push(this.teamForm.value)
    this.teamApplications.push(...teamApplications);
    localStorage.setItem('applications', JSON.stringify(this.teamApplications))
  }

  randomNumber() {
    return Math.random() * (100 - 60) + 60;
  }

}





