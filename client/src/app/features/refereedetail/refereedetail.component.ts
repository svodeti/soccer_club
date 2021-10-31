import { Component, OnInit } from '@angular/core';
import { RefereeService } from 'src/app/services/referee.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-refereedetail',
  templateUrl: './refereedetail.component.html',
  styleUrls: ['./refereedetail.component.scss']
})
export class RefereedetailComponent implements OnInit {

  data = null;
  referee = null;

  constructor(private refereeService: RefereeService,private router: Router) { }

  ngOnInit(): void {
    this.referee = history.state.data;
    console.log(this.referee);
  }

  accept() {
    this.data = {
      "id": this.referee.id,
      "name": this.referee.name,
      "mobile_number": this.referee.mobile_number,
      "email_id": this.referee.email_id,
      "acceptance_status": "ACCEPTED"
    }

    console.log(this.data);

    this.refereeService.updateReferee(this.data)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/referee');
      },
      error => {
        console.log(error);
      });
  }

  reject() {
    console.log('reached reject');
    this.data = {
      "id": this.referee.id,
      "name": this.referee.name,
      "mobile_number": this.referee.mobile_number,
      "email_id": this.referee.email_id,
      "acceptance_status": "REJECTED"
    }

    this.refereeService.updateReferee(this.data)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/referee');
      },
      error => {
        console.log(error);
      });
  }
}
