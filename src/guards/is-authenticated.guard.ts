import { Router, type CanActivateFn } from '@angular/router'; // Importa Router para la navegación y el tipo CanActivateFn para definir el guardia de ruta.
import { AuthStatus } from '../app/domain/enums/auth-status.enum'; // Importa el enumerado AuthStatus que define los estados de autenticación.
import { AuthService } from '../app/auth/services/auth.service'; // Importa el servicio AuthService para gestionar la autenticación.
import { inject } from '@angular/core'; // Importa la función inject de Angular para inyectar servicios.

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  // Define el guardia isAuthenticatedGuard como una función que retorna un booleano.
  const authService = inject(AuthService); // Inyecta el servicio AuthService.
  const router = inject(Router); // Inyecta el Router para realizar la navegación.

  if (authService.authStatus() === AuthStatus.authenticated) {
    // Verifica si el estado de autenticación es 'authenticated'.
    return true; // Retorna true, permitiendo el acceso a la ruta si el usuario está autenticado.
  }

  if (authService.authStatus() === AuthStatus.checking) {
    // Verifica si el estado de autenticación es 'checking'.
    return false; // Retorna false, bloqueando el acceso mientras se verifica el estado de autenticación.
  }

  const url = state.url; // Guarda la URL actual que se está intentando acceder.
  localStorage.setItem('url', url); // Almacena la URL en localStorage para redirigir más tarde.
  router.navigateByUrl('/'); // Redirige al usuario a la página de inicio.

  return false; // Retorna false, bloqueando el acceso a la ruta si el usuario no está autenticado.
};
