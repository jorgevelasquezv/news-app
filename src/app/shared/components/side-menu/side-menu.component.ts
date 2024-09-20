import { CommonModule } from '@angular/common'; // Importa el módulo común de Angular para utilizar directivas y componentes básicos.
import { Component, inject } from '@angular/core'; // Importa los decoradores y funcionalidades para la creación de componentes.
import { RouterModule } from '@angular/router'; // Importa el módulo de enrutamiento de Angular para manejar la navegación.
import { UserService } from '../../../services/user.service'; // Importa el servicio de usuario para acceder a la información del usuario.
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar alertas personalizadas.

@Component({
  selector: 'shared-side-menu', // Define el selector del componente para su uso en plantillas.
  standalone: true, // Indica que este componente es independiente y no necesita un módulo específico.
  imports: [CommonModule, RouterModule], // Importa módulos necesarios, como CommonModule y RouterModule.
  templateUrl: './side-menu.component.html', // Especifica la ruta de la plantilla HTML del componente.
})
export class SideMenuComponent {
  private userService: UserService = inject(UserService); // Inyecta el servicio de usuario para poder acceder a su funcionalidad.

  // Método para verificar si el usuario ha iniciado sesión.
  public verifityUser(): void {
    // Comprueba si el usuario no está definido.
    if (!this.userService.user()) {
      Swal.fire({
        // Muestra una alerta si el usuario no ha iniciado sesión.
        position: 'center', // Posiciona la alerta en el centro de la pantalla.
        icon: 'error', // Tipo de alerta: error.
        title: 'Oops...', // Título de la alerta.
        text: 'Debes iniciar sesión para ver esta sección', // Mensaje que informa al usuario que debe iniciar sesión.
      });
    }
  }
}
