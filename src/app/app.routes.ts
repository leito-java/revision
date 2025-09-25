import { Routes } from '@angular/router';
import { ParentComponent } from './ngdocheck/parent/parent.component';
import { ParentOnchangeComponent } from './ngOnChange/parent/parentOnchange.component';

export const routes: Routes = [
  { path: 'ngdocheck', component: ParentComponent },
  { path: 'ngonchanges', component: ParentOnchangeComponent },
  { path: '', redirectTo: 'ngdocheck', pathMatch: 'full' }, // page par défaut
];
