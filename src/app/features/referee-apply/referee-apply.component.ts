import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referee-apply',
  templateUrl: './referee-apply.component.html',
  styleUrls: ['./referee-apply.component.scss']
})
export class RefereeApplyComponent implements OnInit {

  
  number1 = [];

  constructor() {

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
  }
  
  

}
