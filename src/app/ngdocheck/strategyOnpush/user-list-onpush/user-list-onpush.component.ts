import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-list-onpush',
  imports: [CommonModule],
  templateUrl: './user-list-onpush.component.html',
  styleUrl: './user-list-onpush.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush, // 👈 meilleure stratégie
})
export class UserListOnpushComponent implements OnChanges {
  @Input() users!: { name: string }[];
  renderCount = 0;

  ngOnChanges() {
    this.renderCount++;
    console.log('✅ OnPush - ngOnChanges triggered');
  }
}
