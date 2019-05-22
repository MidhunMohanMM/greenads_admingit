import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportbyuserComponent } from './reportbyuser.component';

describe('ReportbyuserComponent', () => {
  let component: ReportbyuserComponent;
  let fixture: ComponentFixture<ReportbyuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportbyuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
