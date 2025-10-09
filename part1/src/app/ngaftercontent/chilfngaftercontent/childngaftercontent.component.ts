import {
  Component,
  ContentChild,
  ElementRef,
  AfterContentInit,
  AfterContentChecked,
} from '@angular/core';

@Component({
  selector: 'app-childngaftercontent',
  imports: [],
  templateUrl: './childngaftercontent.component.html',
  styleUrl: './childngaftercontent.component.css',
})
export class ChildngaftercontentComponent implements AfterContentInit, AfterContentChecked {
  @ContentChild('msg') message!: ElementRef;
  logMessage = '';
  private checkedCount = 0;

  ngAfterContentInit() {
    // Manipule le texte
    if (this.message) {
      this.message.nativeElement.textContent += ' ✨ (modifié par l’enfant)';
      this.message.nativeElement.style.color = 'red';
    }
  }
  // se lance après chaque vérification de contenu (projection)
  ngAfterContentChecked() {
    this.checkedCount++;
    console.log(`Enfant → ngAfterContentChecked #${this.checkedCount}`);
    this.logMessage = `✅ ngAfterContentChecked exécuté${this.checkedCount} fois`;
  }
}
