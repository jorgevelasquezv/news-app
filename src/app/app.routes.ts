import { Routes } from '@angular/router';
import { isNotAuthenticatedGuard } from '../guards/is-not-authenticated.guard';
import { isAuthenticatedGuard } from '../guards/is-authenticated.guard';
import { isAdminGuard } from '../guards/is-admin.guard';

export const routes: Routes = [
  {
    path: '',
    // canActivate: [isNotAuthenticatedGuard],
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'login',
    canActivate: [isNotAuthenticatedGuard],
    loadComponent: () => import('./auth/pages/login/login.component'),
  },
  {
    path: 'register',
    canActivate: [isNotAuthenticatedGuard],
    loadComponent: () => import('./auth/pages/register/register.component'),
  },
  {
    path: 'news/:category',
    canActivate: [isAuthenticatedGuard],
    loadComponent: () => import('./news/news.component'),
  },
  {
    path: 'news/news-detail/:id',
    canActivate: [isAuthenticatedGuard],
    loadComponent: () => import('./home/news-detail/news-detail.component'),
  },
  {
    path: 'contact-us',
    // canActivate: [isNotAuthenticatedGuard],
    loadComponent: () => import('./contact-us/contact-us.component'),
  },
  {
    path: 'admin',
    canActivate: [isAdminGuard],
    loadComponent: () => import('./auth/pages/admin/admin.component'),
  },
];
