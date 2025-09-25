import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListDefaultComponent } from './user-list-default.component';

describe('UserListDefaultComponent', () => {
  let component: UserListDefaultComponent;
  let fixture: ComponentFixture<UserListDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListDefaultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
