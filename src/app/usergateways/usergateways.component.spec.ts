import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergatewaysComponent } from './usergateways.component';

describe('UsergatewaysComponent', () => {
  let component: UsergatewaysComponent;
  let fixture: ComponentFixture<UsergatewaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsergatewaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergatewaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
