import { CommonModule } from '@angular/common'; // Importa el módulo común de Angular para utilizar directivas y servicios comunes.
import { Component, inject, OnDestroy, OnInit } from '@angular/core'; // Importa decoradores y ciclos de vida de Angular.
import { TableUsersComponent } from '../../components/table-users/table-users.component'; // Importa el componente que muestra la tabla de usuarios.
import { CreateUserComponent } from '../../components/create-user/create-user.component'; // Importa el componente que permite crear nuevos usuarios.
import { AuthService } from '../../services/auth.service'; // Importa el servicio de autenticación para manejar usuarios.
import { Subscription } from 'rxjs'; // Importa la clase Subscription para manejar suscripciones de RxJS.

@Component({
  selector: 'admin', // Define el selector del componente.
  standalone: true, // Indica que el componente es independiente.
  imports: [CommonModule, TableUsersComponent, CreateUserComponent], // Especifica módulos y componentes que se utilizan.
  templateUrl: './admin.component.html', // Ruta del archivo de plantilla HTML.
})
export default class AdminComponent implements OnInit, OnDestroy {
  // Clase del componente que implementa las interfaces OnInit y OnDestroy.
  private authService: AuthService = inject(AuthService); // Inyecta el servicio de autenticación.
  private usersSubscription: Subscription = new Subscription(); // Inicializa la suscripción para la lista de usuarios.

  ngOnInit(): void {
    // Método llamado al inicializar el componente.
    this.usersSubscription = this.authService.findUsers().subscribe(); // Se suscribe a la búsqueda de usuarios.
  }

  ngOnDestroy(): void {
    // Método llamado al destruir el componente.
    this.usersSubscription.unsubscribe(); // Cancela la suscripción de usuarios.
  }
}
