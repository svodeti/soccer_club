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
                label: 'Coach',
                routerLink:['/coach'],
                routerLinkActiveOptions: { exact: true }  
            },
            {
                label: 'Referee',
                routerLink:['/referee'],
                routerLinkActiveOptions: { exact: true }  
            },
            {
              label: 'Player',
              routerLink:['/player'],
              routerLinkActiveOptions: { exact: true }  
            },
            {
              label: 'Tournament',
              routerLinkActiveOptions: { exact: true }  
            },
          {
            label: 'Sponsors',
        }
        ];
    }
}
