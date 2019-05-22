import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsbydateComponent } from './reportsbydate.component';

describe('ReportsbydateComponent', () => {
  let component: ReportsbydateComponent;
  let fixture: ComponentFixture<ReportsbydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsbydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
