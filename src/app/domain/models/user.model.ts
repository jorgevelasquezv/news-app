// Importación de la enumeración Role desde el archivo de enums, que define los roles de usuario.
import { Role } from '../enums/role.enum';

// Exportación de una interfaz llamada User, que define la estructura de un objeto de usuario.
export interface User {
  // ID opcional del usuario, que puede no estar presente.
  id?: string;

  // Nombre completo del usuario.
  fullName: string;

  // Dirección de correo electrónico del usuario.
  email: string;

  // Contraseña del usuario.
  password: string;

  // Rol del usuario, que puede ser uno de los valores definidos en el enum Role.
  role?: Role;

  // Estado de actividad del usuario, que puede ser verdadero o falso, y es opcional.
  isActive?: boolean;
}
