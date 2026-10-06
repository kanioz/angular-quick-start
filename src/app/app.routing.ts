import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/user.component').then((m) => m.UserComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about.component').then((m) => m.AboutComponent),
  },
];
