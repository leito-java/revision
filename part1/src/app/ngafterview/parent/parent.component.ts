import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-view',
  imports: [ChildComponentComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponentComponent) child!: ChildComponentComponent;

  initDone = false;
  updateDone = false;

  ngAfterViewInit() {
    // Étape 1 : accès direct après init
    this.child.changerMessage('Message modifié par le Parent après ngAfterViewInit ✅');
    this.initDone = true;
  }

  mettreAJourEnfant() {
    // Étape 2 : appel d’une méthode publique
    this.child.changerMessage('Nouveau message depuis le bouton du Parent ✅');
    this.updateDone = true;
  }
}
