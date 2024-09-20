import { inject } from '@angular/core'; // Importa la función inject para inyectar dependencias.
import { Router, type CanActivateFn } from '@angular/router'; // Importa Router para la navegación y CanActivateFn para definir el guardia de ruta.
import { AuthService } from '../app/auth/services/auth.service'; // Importa el servicio AuthService para gestionar la autenticación.
import { AuthStatus } from '../app/domain/enums/auth-status.enum'; // Importa el enumerado AuthStatus que define los estados de autenticación.

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  // Define el guardia isNotAuthenticatedGuard como una función que retorna un booleano.
  const authService = inject(AuthService); // Inyecta el servicio AuthService.
  const router = inject(Router); // Inyecta el Router para realizar la navegación.

  if (authService.authStatus() === AuthStatus.unauthenticated) {
    // Verifica si el estado de autenticación es 'unauthenticated'.
    return true; // Retorna true, permitiendo el acceso a la ruta si el usuario no está autenticado.
  }

  if (authService.authStatus() === AuthStatus.checking) {
    // Verifica si el estado de autenticación es 'checking'.
    return false; // Retorna false, bloqueando el acceso mientras se verifica el estado de autenticación.
  }

  router.navigateByUrl('/'); // Redirige al usuario a la página de inicio si ya está autenticado.

  return true; // Retorna true para permitir la navegación a la ruta.
};
