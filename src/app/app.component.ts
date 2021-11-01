import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'soccerclub';
  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                routerLink:['/home'],
                routerLinkActiveOptions: { exact: true }  
            },
            {
              label: 'Admin',
              routerLink:['/admin'],
              routerLinkActiveOptions: { exact: true }  
            },
            {
              label: 'Apply',
              routerLink:['/apply'],
              routerLinkActiveOptions: { exact: true }  
            },
            // {
            //     label: 'Coach',
            //     routerLink:['/coach'],
            //     routerLinkActiveOptions: { exact: true }  
            // },
            {
                label: 'Referee',
                routerLink:['/referee'],
                routerLinkActiveOptions: { exact: true }  
            },
            {
              label: 'Teams & Schedules',
              routerLink:['/teams_schedules'],
              routerLinkActiveOptions: { exact: true }  
            },
            {
              label: 'Hotels',
              routerLink:['/hotels'],
              routerLinkActiveOptions: { exact: true }  
            },
            {
              label: 'Sponsors',
              routerLinkActiveOptions: { exact: true }  
            },
            {
              label: 'FAQS',
              routerLink:['/faqs'],
              routerLinkActiveOptions: { exact: true }  
            },
        ];
    }
}
