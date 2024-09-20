import { CommonModule } from '@angular/common'; // Importa el módulo común de Angular, que contiene directivas y servicios comunes
import { Component, inject, Signal } from '@angular/core'; // Importa Component, inject y Signal para la creación del componente y la inyección de dependencias
import { Router, RouterModule } from '@angular/router'; // Importa el enrutador y el módulo de enrutamiento de Angular
import { UserService } from '../../../services/user.service'; // Importa el servicio de usuario para manejar información del usuario
import { User } from '../../../domain/models/user.model'; // Importa la interfaz del modelo de usuario
import { Role } from '../../../domain/enums/role.enum'; // Importa la enumeración de roles para definir permisos
import { AuthService } from '../../../auth/services/auth.service'; // Importa el servicio de autenticación para gestionar el login y logout
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar alertas de forma atractiva
import { SearchComponent } from '../search/search.component'; // Importa el componente de búsqueda para integrarlo en la barra de navegación

@Component({
  selector: 'shared-navbar', // Selector para usar el componente en plantillas HTML
  standalone: true, // Indica que el componente es autónomo y no necesita un módulo Angular específico
  imports: [CommonModule, RouterModule, SearchComponent], // Importa módulos y componentes necesarios
  templateUrl: './navbar.component.html', // Define la plantilla HTML que se usará para el componente
})
export class NavbarComponent {
  private router: Router = inject(Router); // Inyecta el servicio de enrutador para navegar entre rutas
  private userServices: UserService = inject(UserService); // Inyecta el servicio de usuario para acceder a la información del usuario
  private authService: AuthService = inject(AuthService); // Inyecta el servicio de autenticación para manejar el estado de la sesión
  public user: Signal<User | undefined> = this.userServices.user; // Crea una señal para almacenar el estado del usuario, que se actualizará automáticamente

  public get isAdmin(): boolean {
    // Método para verificar si el usuario tiene el rol de administrador
    return this.user()?.role === Role.Admin; // Devuelve true si el rol del usuario es Admin
  }

  public logout(): void {
    // Método para cerrar sesión
    this.authService.logout(); // Llama al servicio de autenticación para cerrar sesión
    Swal.fire({
      // Muestra una alerta de SweetAlert2
      position: 'center', // Posición de la alerta en el centro
      icon: 'success', // Icono de éxito
      title: 'Sesión cerrada correctamente', // Título de la alerta
      showConfirmButton: false, // No muestra el botón de confirmación
      timer: 1500, // La alerta se cierra automáticamente después de 1500 ms
    });
    this.router.navigate(['/']); // Redirige a la página principal
  }
}
