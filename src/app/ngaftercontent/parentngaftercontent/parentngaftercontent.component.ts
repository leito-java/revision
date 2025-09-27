import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ChildngaftercontentComponent } from '../chilfngaftercontent/childngaftercontent.component';

@Component({
  selector: 'app-parentngaftercontent',
  imports: [ChildngaftercontentComponent],
  templateUrl: './parentngaftercontent.component.html',
  styleUrl: './parentngaftercontent.component.css',
})
export class ParentngaftercontentComponent implements AfterViewInit {
  @ViewChild('msgParent') msgParent!: ElementRef;

  ngAfterViewInit() {
    // Manipule le texte côté parent
    this.msgParent.nativeElement.textContent += ' ✨ (modifié par le parent)';
    this.msgParent.nativeElement.style.color = 'blue';
  }

  changerParent() {
    this.msgParent.nativeElement.textContent = '🖊️ Modifié depuis le parent via bouton';
    this.msgParent.nativeElement.style.color = 'purple';
  }
}
