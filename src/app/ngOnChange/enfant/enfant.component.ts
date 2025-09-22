import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent {
  @Input() valeurRecue!: string;
}
