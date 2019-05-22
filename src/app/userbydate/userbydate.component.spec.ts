import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbydateComponent } from './userbydate.component';

describe('UserbydateComponent', () => {
  let component: UserbydateComponent;
  let fixture: ComponentFixture<UserbydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
