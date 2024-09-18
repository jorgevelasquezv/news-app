import { CommonModule } from '@angular/common'; // Importa el módulo común de Angular para utilizar directivas y servicios comunes.
import { Component, computed, inject, OnDestroy, signal } from '@angular/core'; // Importa decoradores y utilidades de Angular.
import { AuthService } from '../../services/auth.service'; // Importa el servicio de autenticación para manejar usuarios.
import { User } from '../../../domain/models/user.model'; // Importa el modelo de usuario.
import { Subscription } from 'rxjs'; // Importa la clase Subscription para manejar suscripciones de RxJS.
import { EditUserComponent } from '../edit-user/edit-user.component'; // Importa el componente para editar usuarios.
import Swal from 'sweetalert2'; // Importa la librería SweetAlert2 para mostrar alertas.

@Component({
  selector: 'admin-table-users', // Define el selector del componente.
  standalone: true, // Indica que el componente es independiente.
  imports: [CommonModule, EditUserComponent], // Especifica módulos y componentes que se utilizan.
  templateUrl: './table-users.component.html', // Ruta del archivo de plantilla HTML.
})
export class TableUsersComponent implements OnDestroy {
  // Clase del componente que implementa la interfaz OnDestroy.
  private authService: AuthService = inject(AuthService); // Inyecta el servicio de autenticación.
  private usersSubscription: Subscription = new Subscription(); // Inicializa la suscripción para usuarios.
  private userUpdateSubscription: Subscription = new Subscription(); // Inicializa la suscripción para actualizaciones de usuario.
  private userDeleteSubscription: Subscription = new Subscription(); // Inicializa la suscripción para eliminación de usuario.
  public users = computed(() => this.authService.users() ?? []); // Computa la lista de usuarios, asegurando un valor por defecto vacío.
  public selectedUser: User | null = null; // Almacena el usuario seleccionado para edición, inicialmente nulo.
  public isModalOpen = signal<boolean>(false); // Señal para controlar la visibilidad del modal.

  constructor() {
    // Constructor del componente.
    this.usersSubscription = this.authService.findUsers().subscribe((users) => {
      // Suscribe a la búsqueda de usuarios.
      this.authService.setUsers(users); // Establece los usuarios en el servicio.
    });
  }

  ngOnDestroy(): void {
    // Método llamado al destruir el componente.
    this.usersSubscription.unsubscribe(); // Cancela la suscripción de usuarios.
    this.userDeleteSubscription.unsubscribe(); // Cancela la suscripción de eliminación de usuario.
    this.userUpdateSubscription.unsubscribe(); // Cancela la suscripción de actualización de usuario.
  }

  toggleActive(user: User): void {
    // Método para alternar el estado activo del usuario.
    user.isActive = !user.isActive; // Cambia el estado activo del usuario.
    this.updateUser(user); // Llama al método para actualizar el usuario.
  }

  deleteUser(user: User): void {
    // Método para eliminar un usuario.
    Swal.fire({
      // Muestra una alerta de confirmación.
      title: '¿Estás seguro?', // Título de la alerta.
      text: `Estás a punto de eliminar a ${user.fullName}`, // Mensaje de alerta.
      icon: 'warning', // Icono de advertencia.
      showCancelButton: true, // Muestra botón de cancelar.
      confirmButtonColor: '#3085d6', // Color del botón de confirmación.
      cancelButtonColor: '#d33', // Color del botón de cancelación.
      confirmButtonText: 'Sí, eliminar', // Texto del botón de confirmación.
      cancelButtonText: 'Cancelar', // Texto del botón de cancelación.
    }).then((result) => {
      // Maneja la respuesta de la alerta.
      if (result.isConfirmed) {
        // Si se confirma la eliminación:
        this.userDeleteSubscription = this.authService // Asigna la suscripción a la eliminación de usuario.
          .deleteUser(user) // Llama al servicio para eliminar el usuario.
          .subscribe(); // Suscribe para manejar la respuesta.
        this.authService.setUsers(this.users().filter((u) => u.id !== user.id)); // Actualiza la lista de usuarios excluyendo al eliminado.
        Swal.fire('Eliminado', 'El usuario ha sido eliminado', 'success'); // Muestra un mensaje de éxito.
      }
    });
  }

  updateUser(user: User): void {
    // Método para actualizar un usuario.
    this.userUpdateSubscription = this.authService.updtaeUser(user).subscribe(); // Llama al servicio para actualizar el usuario.
  }

  openEditModal(user: User) {
    // Método para abrir el modal de edición.
    this.selectedUser = user; // Establece el usuario seleccionado.
    this.isModalOpen.set(true); // Abre el modal.
  }

  closeEditModal() {
    // Método para cerrar el modal de edición.
    this.isModalOpen.set(false); // Cierra el modal.
    this.selectedUser = null; // Reinicia el usuario seleccionado.
  }
}
