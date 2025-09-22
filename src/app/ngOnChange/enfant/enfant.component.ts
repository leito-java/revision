import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent implements OnChanges {
  @Input() valeurRecue!: string;
  @Input() utilisateur!: { nom: string, age: string };
  messageChange = false;

  ngOnChanges(changes: SimpleChanges) {
    const utilisateurChange = changes['utilisateur'];

    console.log('🔁 ngOnChanges déclenché dans enfant', changes);

    if (utilisateurChange && !utilisateurChange.firstChange) {
      this.messageChange = true;

      setTimeout(() => {
        this.messageChange = false;
      }, 2000);
    }
  }
}
