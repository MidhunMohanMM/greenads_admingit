import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocknumbersComponent } from './blocknumbers.component';

describe('BlocknumbersComponent', () => {
  let component: BlocknumbersComponent;
  let fixture: ComponentFixture<BlocknumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocknumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocknumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
