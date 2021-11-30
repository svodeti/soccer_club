import { Component, OnInit } from '@angular/core';
import { SponsorService } from 'src/app/services/sponsor.service';
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-becomesponsor',
  templateUrl: './becomesponsor.component.html',
  styleUrls: ['./becomesponsor.component.scss']
})
export class BecomesponsorComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: '',
    repesentative_name: '',
    mobile_number: '',
    email_id: '',
    income: '',
    sponsoring_amount: '',
    comments: '',
    previous_sponsorships: '',
    address: '',
    acceptance_status: ''
  });

  submitted = false;

  constructor(private sponsorService: SponsorService,private formBuilder: FormBuilder,private router: Router) { }

  saveTutorial(formData) {
    const data = {
      name: formData.name,
      representative_name: formData.representative_name,
      mobile_number: formData.name,
      email_id: formData.email_id,
      income: formData.income,
      sponsoring_amount: formData.sponsoring_amount,
      comments: formData.comments,
      previous_sponsorships: formData.previous_sponsorships,
      address: formData.address,
      acceptance_status: "PENDING",
    };

    this.sponsorService.createSponsor(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  getValues(data): void {
    console.log(data);
    this.saveTutorial(data)
   }

  return() {
    this.router.navigateByUrl('/sponsors');
  }

  ngOnInit(): void {
  }

}
