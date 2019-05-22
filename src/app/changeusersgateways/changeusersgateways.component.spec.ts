import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeusersgatewaysComponent } from './changeusersgateways.component';

describe('ChangeusersgatewaysComponent', () => {
  let component: ChangeusersgatewaysComponent;
  let fixture: ComponentFixture<ChangeusersgatewaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeusersgatewaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeusersgatewaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
