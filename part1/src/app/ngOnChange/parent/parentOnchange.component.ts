import { Component } from '@angular/core';
import { EnfantComponent } from '../enfant/enfant.component';

@Component({
  selector: 'app-parent-onchange',
  imports: [EnfantComponent],
  templateUrl: './parentOnchange.component.html',
  styleUrl: './parentOnchange.component.css',
})
export class ParentOnchangeComponent {
  valeurEnvoyee = 'Bonjour mon enfants !  ';
  utilisateur = { nom: 'amine', age: '36' };

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.valeurEnvoyee = '⏳ Valeur mise à jour après 3s';
  //   }, 3000);
  // }

  changerNomSansNouvelleReference() {
    // ⚠️ ngOnChanges ne sera PAS déclenché

    this.utilisateur.nom = 'El gorch';
  }
  changerNomAvecNouvelleReference() {
    // ✅ ngOnChanges sera déclenché
    this.utilisateur = { ...this.utilisateur, nom: 'El gorch mohamed amine' };
  }
}
