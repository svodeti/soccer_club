import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeAdminComponent } from './referee-admin.component';

describe('RefereeAdminComponent', () => {
  let component: RefereeAdminComponent;
  let fixture: ComponentFixture<RefereeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
