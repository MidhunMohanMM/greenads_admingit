import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpaymentComponent } from './totalpayment.component';

describe('TotalpaymentComponent', () => {
  let component: TotalpaymentComponent;
  let fixture: ComponentFixture<TotalpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
