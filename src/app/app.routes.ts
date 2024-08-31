import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/pages/login/login.component'),
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/pages/register/register.component'),
  },
  {
    path: 'news/:category',
    loadComponent: () => import('./news/news.component'),
  }
];
