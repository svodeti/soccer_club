import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamApplyComponent } from './team-apply.component';

describe('TeamApplyComponent', () => {
  let component: TeamApplyComponent;
  let fixture: ComponentFixture<TeamApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
