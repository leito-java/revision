import { Component } from '@angular/core';
import { EnfantComponent } from '../enfant/enfant.component';

@Component({
  selector: 'app-parent',
  imports: [EnfantComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  valeurEnvoyee = 'Bonjour mon enfants !  ';


  ngOnInit() {
    setTimeout(() => {
      this.valeurEnvoyee = '⏳ Valeur mise à jour après 3s';
    }, 3000);
  }
}
