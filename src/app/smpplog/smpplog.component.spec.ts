import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmpplogComponent } from './smpplog.component';

describe('SmpplogComponent', () => {
  let component: SmpplogComponent;
  let fixture: ComponentFixture<SmpplogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmpplogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmpplogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
