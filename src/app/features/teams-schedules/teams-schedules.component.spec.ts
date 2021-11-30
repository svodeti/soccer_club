import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSchedulesComponent } from './teams-schedules.component';

describe('TeamsSchedulesComponent', () => {
  let component: TeamsSchedulesComponent;
  let fixture: ComponentFixture<TeamsSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
