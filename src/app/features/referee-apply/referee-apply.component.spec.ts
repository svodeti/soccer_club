import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeApplyComponent } from './referee-apply.component';

describe('RefereeApplyComponent', () => {
  let component: RefereeApplyComponent;
  let fixture: ComponentFixture<RefereeApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereeApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
