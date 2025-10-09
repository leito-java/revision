import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParentComponent } from "./ngafterview/parent/parent.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
