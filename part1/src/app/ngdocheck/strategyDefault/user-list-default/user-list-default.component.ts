import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-default',
  imports: [CommonModule],
  templateUrl: './user-list-default.component.html',
  styleUrl: './user-list-default.component.css',
  changeDetection: ChangeDetectionStrategy.Default, // 👎 legacy
})
export class UserListDefaultComponent implements DoCheck {
  @Input() users!: { name: string }[];
  renderCount = 0;

  ngDoCheck() {
    this.renderCount++;
    console.log('⚠️ Default - ngDoCheck triggered');
  }
}
