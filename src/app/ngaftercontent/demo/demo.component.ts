import { Component } from '@angular/core';
import { ChildngaftercontentComponent } from '../chilfngaftercontent/childngaftercontent.component';
import { ParentngaftercontentComponent } from '../parentngaftercontent/parentngaftercontent.component';
// import { RouterOutlet } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-demo',
  imports: [ChildngaftercontentComponent, ParentngaftercontentComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent {}
