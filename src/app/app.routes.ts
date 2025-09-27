import { Routes } from '@angular/router';
import { ParentComponent } from './ngdocheck/parent/parent.component';
import { ParentOnchangeComponent } from './ngOnChange/parent/parentOnchange.component';
import { DemoComponent } from './ngaftercontent/demo/demo.component';

export const routes: Routes = [
  { path: 'ngdocheck', component: ParentComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'ngonchanges', component: ParentOnchangeComponent },
  { path: '', redirectTo: 'ngdocheck', pathMatch: 'full' }, // page par défaut
];
