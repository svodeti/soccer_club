import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefereeDashboardModule } from './referee-dashboard.module';

const routes: Routes = [
  {
    path: '',
    component: RefereeDashboardModule
  }
];
<div style="padding: 2rem;">
    <p-tabView>
        <p-tabPanel header="Referees for Approval">
          <div style="padding: 1rem; display: flex; flex-direction: column;">
            <div style="display:flex;flex-direction: row; flex: 1;" *ngFor=" let referee of refereeApplications">
                <div style="flex: 0.7" *ngIf="!referee.approved">
                    <p-panel header={{referee.firstname}} [toggleable]="true" collapsed="true">
                        The United States men's national soccer team (USMNT) represents the United States in men's international soccer competitions. The team is controlled by the United States Soccer Federation and is a member of FIFA and CONCACAF.

                        The team has appeared in ten FIFA World Cups, including the first in 1930, where they reached the semi-finals. The U.S. participated in the 1934 and 1950 World Cups, winning 1–0 against England in the latter. After 1950, the U.S. did not qualify for the World Cup until 1990. The U.S. qualified as host of the 1994 World Cup, where they lost to Brazil in the round of sixteen. They qualified for five more consecutive World Cups after 1994 (for a total of seven straight appearances, a feat shared with only seven other nations),[9] becoming one of the tournament's regular competitors and often advancing to the knockout stage. The U.S. reached the quarter-finals of the 2002 World Cup, where they controversially lost to Germany. In the 2009 Confederations Cup, they eliminated top-ranked Spain in the semi-finals
                        before losing to Brazil in the final, the team's only appearance in the final of a major intercontinental tournament.
                        <br><br>
                    Referee Info:<br>
                    <div style="margin-left: 500px">
                        <table border="2px" style="border-collapse: collapse">
                            <tr>
                                <th>USSF Number</th>
                                <th>Requested age bracket</th>
                                <th>Referee Grade</th>
                                <th>Experience(in years)</th>
                                <th>State</th>
                            </tr>
                            <tr>
                                <td>{{referee.USSFNumber}}</td>
                                <td>{{referee.agebracket}}</td>
                                <td>{{referee.refereegrade}}</td>
                                <td>{{referee.exp}}</td>
                                <td>{{referee.state}}</td>
                            </tr>
                        </table>
                    </div>
                    </p-panel>
                </div>
                <div style="flex: 0.1" *ngIf="!referee.approved">

                </div>
                <div style="flex: 0.2" *ngIf="!referee.approved">
                    <button pButton type="button" label="Approve" class="p-button-success"
                    (click)="approve(referee.refereeId)"></button>
                    <button pButton type="button" label="Reject" class="p-button-danger"></button>
                </div>
            </div>
            
          </div>
        </p-tabPanel>
        <p-tabPanel header="Approved Referees">
            <div style="padding: 1rem; display: flex; flex-direction: column;">
                <div style="display:flex;flex-direction: row; flex: 1;" *ngFor=" let referee of refereeApplications">
                    <div style="flex: 1" *ngIf="referee.approved">
                        <p-panel header={{referee.firstname}} [toggleable]="true" collapsed="true">
                            The United States men's national soccer team (USMNT) represents the United States in men's international soccer competitions. The team is controlled by the United States Soccer Federation and is a member of FIFA and CONCACAF.
    
                            The team has appeared in ten FIFA World Cups, including the first in 1930, where they reached the semi-finals. The U.S. participated in the 1934 and 1950 World Cups, winning 1–0 against England in the latter. After 1950, the U.S. did not qualify for the World Cup until 1990. The U.S. qualified as host of the 1994 World Cup, where they lost to Brazil in the round of sixteen. They qualified for five more consecutive World Cups after 1994 (for a total of seven straight appearances, a feat shared with only seven other nations),[9] becoming one of the tournament's regular competitors and often advancing to the knockout stage. The U.S. reached the quarter-finals of the 2002 World Cup, where they controversially lost to Germany. In the 2009 Confederations Cup, they eliminated top-ranked Spain in the semi-finals
                            before losing to Brazil in the final, the team's only appearance in the final of a major intercontinental tournament.
                            <br><br>
                        Referee Info:<br>
                        <div style="margin-left: 500px">
                            <table border="2px" style="border-collapse: collapse">
                                <tr>
                                    <th>USSF Number</th>
                                    <th>Requested age bracket</th>
                                    <th>Referee Grade</th>
                                    <th>Experience(in years)</th>
                                    <th>State</th>
                                </tr>
                                <tr>
                                    <td>{{referee.USSFNumber}}</td>
                                    <td>{{referee.agebracket}}</td>
                                    <td>{{referee.refereegrade}}</td>
                                    <td>{{referee.exp}}</td>
                                    <td>{{referee.state</td>
                                </tr>
                            </table>
                        </div>
                        </p-panel>
                    </div>
                    
                </div>
                
              </div>
        </p-tabPanel>
        <p-tabPanel header="Other Applications">
            No Applications
        </p-tabPanel>
        <p-tabPanel header="Schedules Matches">
            <h3> Schedule for approved referees.</h3>
            <div style="display: flex; flex-direction: row;margin-bottom: 2rem;">
                <div style="display: flex; flex-direction: column;margin-right: 2rem;">
                    <h3>Referee</h3>
                    <p-dropdown [(ngModel)]="referee" [options]="referees" optionLabel="name"  optionValue="name"
                     placeholder="Select Referee"></p-dropdown>
                </div>
                <div style="display: flex; flex-direction: column;margin-right: 2rem;">
                    <h3>Date & Time</h3>
                    <p-calendar [(ngModel)]="dateTime" [showTime]="true" [showSeconds]="true" inputId="time" ></p-calendar>
                </div>
                <div style="display: flex; flex-direction: column;margin-right: 2rem;">
                    <h3>Location</h3>
                    <p-dropdown [(ngModel)]="location" [options]="locations" optionLabel="name"  optionValue="name"
                     placeholder="Select location"></p-dropdown>
                </div>
                <div style="display: flex;margin-right: 2rem;">
                    <button pButton type="button" label="Add Schedule" style="display: flex;justify-content: flex-end;"
                    (click)="addSchedule()"></button>
                </div>
            </div>
            <p-table [value]="schedule" responsiveLayout="scroll">
                <ng-template pTemplate="header">
                    <tr>
                        <th>No.</th>
                        <th>Referee Name</th>
                        <th>Time</th>
                        <th>Location</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-product>
                    <tr>
                        <td>{{product.no}}</td>
                        <td>{{product.name}}</td>
                        <td>{{product.time}}</td>
                        <td>{{product.location}}</td>
                    </tr>
                </ng-template>
            </p-table>
            
        </p-tabPanel>
    </p-tabView>
</div>
