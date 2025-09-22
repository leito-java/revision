import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnfantComponent } from './ngOnChange/enfant/enfant.component';
import { ParentComponent } from "./ngOnChange/parent/parent.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnfantComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'part1';
}
