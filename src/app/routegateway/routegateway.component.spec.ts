import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutegatewayComponent } from './routegateway.component';

describe('RoutegatewayComponent', () => {
  let component: RoutegatewayComponent;
  let fixture: ComponentFixture<RoutegatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutegatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutegatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
