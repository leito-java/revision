import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  imports: [ CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = ['Amine', 'Sara'];

  @ViewChild('slot', { read: ViewContainerRef, static: true })
  slot!: ViewContainerRef;

  addUser() {
    this.slot.clear();
    const ref = this.slot.createComponent(UserFormComponent);
    ref.instance.saved.subscribe((name: string) => {
      this.users.push(name);
      ref.destroy();
    });
  }
}
