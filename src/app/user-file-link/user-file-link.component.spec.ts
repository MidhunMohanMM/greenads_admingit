import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFileLinkComponent } from './user-file-link.component';

describe('UserFileLinkComponent', () => {
  let component: UserFileLinkComponent;
  let fixture: ComponentFixture<UserFileLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFileLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFileLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
