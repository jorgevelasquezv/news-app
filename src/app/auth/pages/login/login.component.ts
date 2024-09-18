// Importa el servicio de autenticación desde la ruta especificada.
import { AuthService } from './../../services/auth.service';

// Importa módulos comunes de Angular.
import { CommonModule } from '@angular/common';
// Importa el decorador Component y otros elementos necesarios.
import { Component, inject, OnDestroy } from '@angular/core';
// Importa el constructor de formularios y validadores de Angular.
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// Importa el enrutador de Angular para la navegación.
import { Router } from '@angular/router';
// Importa la clase Subscription de RxJS para manejar suscripciones.
import { Subscription } from 'rxjs';
// Importa SweetAlert2 para mostrar alertas estilizadas.
import Swal from 'sweetalert2';

// Define el componente LoginComponent.
@Component({
  selector: 'login', // Nombre del selector del componente.
  standalone: true, // Indica que el componente es autónomo.
  imports: [CommonModule, ReactiveFormsModule], // Módulos que se importan en este componente.
  templateUrl: './login.component.html', // Ruta de la plantilla HTML asociada.
})
// Exporta la clase LoginComponent como el componente por defecto.
export default class LoginComponent implements OnDestroy {
  // Inyecta el servicio de autenticación.
  private AuthService: AuthService = inject(AuthService);
  // Inyecta el constructor de formularios.
  private formBuilder: FormBuilder = inject(FormBuilder);
  // Inyecta el enrutador para manejar la navegación.
  private router: Router = inject(Router);
  // Crea una suscripción para manejar la respuesta del login.
  private loginSubscribe: Subscription = new Subscription();

  // Define el grupo de formularios para la autenticación.
  public formLogin = this.formBuilder.group({
    // Campo de correo electrónico, requerido y con formato de email.
    email: ['', [Validators.required, Validators.email]],
    // Campo de contraseña, requerido y con una longitud mínima de 6 caracteres.
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  // Implementa el método ngOnDestroy para limpiar la suscripción al destruir el componente.
  ngOnDestroy(): void {
    this.loginSubscribe.unsubscribe(); // Cancela la suscripción para evitar fugas de memoria.
  }

  // Método para manejar el inicio de sesión.
  login() {
    // Obtiene el correo electrónico y la contraseña del formulario.
    const email: string = this.formLogin.value.email as string;
    const password: string = this.formLogin.value.password as string;

    // Verifica si el formulario es válido antes de proceder.
    if (this.formLogin.valid) {
      // Realiza la llamada al servicio de autenticación.
      this.loginSubscribe = this.AuthService.login(email, password).subscribe({
        // Maneja la respuesta exitosa.
        next: (user) => {
          // Muestra una alerta de éxito.
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Bienvenido ${user.fullName}`, // Mensaje de bienvenida con el nombre del usuario.
            showConfirmButton: false, // Oculta el botón de confirmación.
            timer: 1500, // Duración de la alerta.
          });
          // Redirige a la página principal después del inicio de sesión.
          this.router.navigate(['/']);
        },
        // Maneja cualquier error en la autenticación.
        error: (error) => {
          // Muestra una alerta de error con el mensaje recibido.
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Oops...',
            text: error.message,
          });
        },
      });
    }
  }

  // Getter para acceder al control de email en el formulario.
  get email() {
    return this.formLogin.get<string>('email'); // Devuelve el control de email.
  }

  // Getter para acceder al control de contraseña en el formulario.
  get password() {
    return this.formLogin.get('password'); // Devuelve el control de contraseña.
  }

  // Getter para verificar si el email es inválido y ha sido tocado.
  get emailInvalid() {
    if (!this.email) return false; // Si no hay email, devuelve false.
    return this.email.invalid && this.email.touched; // Comprueba si el campo es inválido y ha sido tocado.
  }

  // Getter para verificar si la contraseña es inválida y ha sido tocada.
  get passwordInvalid() {
    if (!this.password) return false; // Si no hay contraseña, devuelve false.
    return this.password.invalid && this.password.touched; // Comprueba si el campo es inválido y ha sido tocado.
  }
}
