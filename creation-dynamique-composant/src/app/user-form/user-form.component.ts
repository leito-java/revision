import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
 
  imports: [CommonModule,FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
name = '';
  @Output() saved = new EventEmitter<string>();
  
  save() {
    if (this.name) this.saved.emit(this.name);
  }
}
