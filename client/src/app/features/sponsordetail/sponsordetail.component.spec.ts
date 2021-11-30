import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsordetailComponent } from './sponsordetail.component';

describe('SponsordetailComponent', () => {
  let component: SponsordetailComponent;
  let fixture: ComponentFixture<SponsordetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsordetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
