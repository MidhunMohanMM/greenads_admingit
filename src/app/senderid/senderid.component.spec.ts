import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderidComponent } from './senderid.component';

describe('SenderidComponent', () => {
  let component: SenderidComponent;
  let fixture: ComponentFixture<SenderidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenderidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
