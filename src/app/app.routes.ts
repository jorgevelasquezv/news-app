import { Routes } from '@angular/router'; // Importa el tipo Routes de Angular Router para definir las rutas de la aplicación.
import { isNotAuthenticatedGuard } from '../guards/is-not-authenticated.guard'; // Importa el guardia que impide el acceso a rutas si el usuario ya está autenticado.
import { isAuthenticatedGuard } from '../guards/is-authenticated.guard'; // Importa el guardia que permite el acceso solo si el usuario está autenticado.
import { isAdminGuard } from '../guards/is-admin.guard'; // Importa el guardia que permite el acceso solo a usuarios con rol de administrador.

export const routes: Routes = [
  // Define una constante routes que contiene un arreglo de rutas.
  {
    path: '', // Ruta raíz que carga el componente de inicio.
    loadComponent: () => import('./home/home.component'), // Carga el componente de inicio de forma perezosa.
  },
  {
    path: 'login', // Ruta para la página de inicio de sesión.
    canActivate: [isNotAuthenticatedGuard], // Aplica el guardia que restringe el acceso si el usuario ya está autenticado.
    loadComponent: () => import('./auth/pages/login/login.component'), // Carga el componente de inicio de sesión de forma perezosa.
  },
  {
    path: 'register', // Ruta para la página de registro.
    canActivate: [isNotAuthenticatedGuard], // Aplica el guardia que restringe el acceso si el usuario ya está autenticado.
    loadComponent: () => import('./auth/pages/register/register.component'), // Carga el componente de registro de forma perezosa.
  },
  {
    path: 'news/:category', // Ruta para las noticias filtradas por categoría.
    canActivate: [isAuthenticatedGuard], // Aplica el guardia que permite el acceso solo a usuarios autenticados.
    loadComponent: () => import('./news/news.component'), // Carga el componente de noticias de forma perezosa.
  },
  {
    path: 'news/news-detail/:id', // Ruta para los detalles de una noticia específica.
    canActivate: [isAuthenticatedGuard], // Aplica el guardia que permite el acceso solo a usuarios autenticados.
    loadComponent: () => import('./home/news-detail/news-detail.component'), // Carga el componente de detalles de noticia de forma perezosa.
  },
  {
    path: 'contact-us', // Ruta para la página de contacto.
    // canActivate: [isNotAuthenticatedGuard], // Esta línea está comentada y podría restringir el acceso a usuarios no autenticados.
    loadComponent: () => import('./contact-us/contact-us.component'), // Carga el componente de contacto de forma perezosa.
  },
  {
    path: 'admin', // Ruta para la página de administración.
    canActivate: [isAdminGuard], // Aplica el guardia que permite el acceso solo a usuarios con rol de administrador.
    loadComponent: () => import('./auth/pages/admin/admin.component'), // Carga el componente de administración de forma perezosa.
  },
];
