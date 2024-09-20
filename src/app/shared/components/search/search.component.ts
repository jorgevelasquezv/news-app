import { CommonModule } from '@angular/common'; // Importa el módulo común de Angular para usar directivas y componentes básicos.
import { Component, inject, Signal } from '@angular/core'; // Importa los decoradores y funcionalidades para la creación de componentes y señales.
import { FormsModule } from '@angular/forms'; // Importa el módulo de formularios de Angular para manejar formularios reactivos.
import { Router } from '@angular/router'; // Importa el enrutador de Angular para gestionar la navegación entre rutas.
import { User } from '../../../domain/models/user.model'; // Importa la interfaz User para tipar los usuarios.
import { UserService } from '../../../services/user.service'; // Importa el servicio de usuario para acceder a la información del usuario.
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar alertas personalizadas.

@Component({
  selector: 'shared-search', // Define el selector del componente para su uso en plantillas.
  standalone: true, // Indica que este componente es independiente y no necesita un módulo Angular específico.
  imports: [CommonModule, FormsModule], // Importa módulos necesarios, como CommonModule y FormsModule.
  templateUrl: './search.component.html', // Especifica la ruta de la plantilla HTML del componente.
})
export class SearchComponent {
  private userService: UserService = inject(UserService); // Inyecta el servicio de usuario para acceder a su funcionalidad.
  public user: Signal<User | undefined> = this.userService.user; // Crea una señal que representa el estado del usuario (definido o no).
  private router: Router = inject(Router); // Inyecta el enrutador para manejar la navegación.
  public query = ''; // Variable para almacenar la consulta de búsqueda.

  // Método que se ejecuta para buscar noticias basadas en una consulta.
  public searchNews(query: string): void {
    // Verifica si el usuario está definido.
    if (!this.user()) {
      Swal.fire({
        // Muestra una alerta si el usuario no ha iniciado sesión.
        position: 'center', // Posiciona la alerta en el centro.
        icon: 'error', // Tipo de alerta: error.
        title: 'Oops...', // Título de la alerta.
        text: 'Debes iniciar sesión para buscar noticias', // Mensaje de error.
      });
      return; // Sale del método si no hay usuario.
    }

    // Verifica si la consulta está vacía o solo contiene espacios.
    if (query.trim().length === 0) return; // No hace nada si la consulta es inválida.

    // Navega a la ruta de búsqueda con la consulta proporcionada.
    this.router.navigate([`/news/search ${query}`]);
    this.query = ''; // Limpia el campo de búsqueda después de la navegación.
  }
}
