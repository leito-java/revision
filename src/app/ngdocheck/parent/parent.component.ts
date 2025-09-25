import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListOnpushComponent } from '../strategyOnpush/user-list-onpush/user-list-onpush.component';
import { UserListDefaultComponent } from '../strategyDefault/user-list-default/user-list-default.component';

@Component({
  selector: 'app-parent',
  imports: [CommonModule, UserListDefaultComponent, UserListOnpushComponent],
  templateUrl: './parent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  counter = 0;
  users = [{ name: 'Alice' }, { name: 'Bob' }];

  increment() {
    this.counter++;
  }

  addUserNewRef() {
    this.users = [...this.users, { name: 'New User ' + (this.users.length + 1) }];
  }

  addUserSameRef() {
    this.users.push({ name: 'Another User ' + (this.users.length + 1) });
  }
}
