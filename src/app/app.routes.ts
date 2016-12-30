import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { UtilsComponent } from './utils/utils.component';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'utils',  component: UtilsComponent },
  {
    path: 'demo', loadChildren: () => System.import('./+demo').then((comp: any) => {
      return comp.default;
    })
  },
  { path: '**',    component: NoContentComponent },
];
