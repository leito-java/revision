import { Routes } from '@angular/router';
import { ParentComponent as NgDoCheckParentComponent } from './ngdocheck/parent/parent.component';
import { ParentOnchangeComponent } from './ngOnChange/parent/parentOnchange.component';
import { ParentComponent as NgAfterViewParentComponent } from './ngafterview/parent/parent.component';

import { DemoComponent } from './ngaftercontent/demo/demo.component';

export const routes: Routes = [
  { path: 'ngdocheck', component: NgDoCheckParentComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'ngonchanges', component: ParentOnchangeComponent },
  { path: 'ngafterview', component: NgAfterViewParentComponent },
  { path: '', redirectTo: 'ngdocheck', pathMatch: 'full' }, // page par défaut
];
