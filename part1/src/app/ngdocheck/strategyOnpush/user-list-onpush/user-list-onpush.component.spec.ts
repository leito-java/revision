import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListOnpushComponent } from './user-list-onpush.component';

describe('UserListOnpushComponent', () => {
  let component: UserListOnpushComponent;
  let fixture: ComponentFixture<UserListOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListOnpushComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
