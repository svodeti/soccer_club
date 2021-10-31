import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereedetailComponent } from './refereedetail.component';

describe('RefereedetailComponent', () => {
  let component: RefereedetailComponent;
  let fixture: ComponentFixture<RefereedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
