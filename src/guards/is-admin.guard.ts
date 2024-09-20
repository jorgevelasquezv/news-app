import { inject } from '@angular/core'; // Importa la función inject de Angular para inyectar servicios.
import type { CanActivateFn } from '@angular/router'; // Importa el tipo CanActivateFn para definir un guardia que controla el acceso a rutas.
import { UserService } from '../app/services/user.service'; // Importa el servicio de usuario para acceder a la información del usuario actual.
import { Role } from '../app/domain/enums/role.enum'; // Importa el enumerado Role que define los diferentes roles de usuario.

export const isAdminGuard: CanActivateFn = (route, state) => {
  // Define el guardia isAdminGuard como una función que retorna un booleano.
  const userServices: UserService = inject(UserService); // Inyecta el servicio UserService.
  const user = userServices.user(); // Obtiene el usuario actual a través del servicio.

  if (user?.role === Role.Admin) {
    // Verifica si el rol del usuario es Admin.
    return true; // Retorna true si el usuario tiene rol de administrador, permitiendo el acceso a la ruta.
  }

  return false; // Retorna false si el usuario no es administrador, bloqueando el acceso a la ruta.
};
