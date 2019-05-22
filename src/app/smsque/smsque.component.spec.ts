import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsqueComponent } from './smsque.component';

describe('SmsqueComponent', () => {
  let component: SmsqueComponent;
  let fixture: ComponentFixture<SmsqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
