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
  },
  {
    path: 'news/news-detail/:id',
    loadComponent: () => import('./home/news-detail/news-detail.component'),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./contact-us/contact-us.component'),
  },
  {
    path: 'admin',
    loadComponent: () => import('./auth/pages/admin/admin.component'),
  }
];
