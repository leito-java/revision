import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
 message = 'Message initial de l’enfant avec ngAfterViewInit click sur le bouton pour voir l etape 2';

  changerMessage(nouveau: string) {
    this.message = nouveau;
  }
}
