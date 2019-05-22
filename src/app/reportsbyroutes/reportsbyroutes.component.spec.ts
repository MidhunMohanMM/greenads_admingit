import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsbyroutesComponent } from './reportsbyroutes.component';

describe('ReportsbyroutesComponent', () => {
  let component: ReportsbyroutesComponent;
  let fixture: ComponentFixture<ReportsbyroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsbyroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsbyroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
