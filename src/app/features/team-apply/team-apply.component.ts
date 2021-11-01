import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-apply',
  templateUrl: './team-apply.component.html',
  styleUrls: ['./team-apply.component.scss']
})



export class TeamApplyComponent implements OnInit {

  groups = [];

  playlevel = [];

  color = [];

  contact = [];

  number = [];

  year = [];

  season = [];

  result = [];

  constructor() {
      this.groups = [
          {name: 'Boys U08 DOB2014 7v7 ($625.00)'},
          {name: 'Boys U11 DOB2014 7v7 ($675.00)'},
          {name: 'Boys U13 DOB2014 9v9 ($725.00)'},
          {name: 'Boys U17 DOB2014 11v11 ($775.00)'},
          {name: 'Girls U08 DOB2014 7v7 ($625.00)'},
          {name: 'Girls U11 DOB2014 7v7 ($675.00)'},
          {name: 'Girls U13 DOB2014 9v9 ($725.00)'},
          {name: 'Girls U17 DOB2014 11v11 ($775.00)'}
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
  }



}





