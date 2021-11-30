import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
id:any;
  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.id = id;
      console.log(id)
      });
  }
submit(){
  if(this.id == 1){
    localStorage.setItem('adminLoggedIn',"true")
    this.router.navigateByUrl('/admin')
  }
  if(this.id == 2){
    localStorage.setItem('refereeLoggedIn',"true")
    this.router.navigateByUrl('/referee-admin')
    }
}
}
