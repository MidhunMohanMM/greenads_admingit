import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowusersComponent } from './lowusers.component';

describe('LowusersComponent', () => {
  let component: LowusersComponent;
  let fixture: ComponentFixture<LowusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
