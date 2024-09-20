// Exportación de un enum llamado AuthStatus, que define diferentes estados de autenticación.
export enum AuthStatus {
  // Estado en el que se está verificando la autenticación.
  checking = 'checking',

  // Estado en el que el usuario está autenticado correctamente.
  authenticated = 'authenticated',

  // Estado en el que el usuario no está autenticado.
  unauthenticated = 'unauthenticated',
}
