// Importaciones de módulos y componentes de Angular.
import { CommonModule } from '@angular/common'; // Proporciona funcionalidades comunes de Angular.
import { Component, inject, OnDestroy } from '@angular/core'; // Importa decorador Component, método inject y interfaz OnDestroy.
import { AuthService } from '../../services/auth.service'; // Importa el servicio de autenticación.
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'; // Importa herramientas para formularios reactivos.
import { Router } from '@angular/router'; // Importa el enrutador para navegar entre rutas.
import { Subscription } from 'rxjs'; // Importa Subscription para manejar suscripciones a observables.
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar alertas.

@Component({
  selector: 'register', // Selector del componente para usar en plantillas.
  standalone: true, // Indica que el componente es autónomo.
  imports: [CommonModule, ReactiveFormsModule], // Módulos que se importan en este componente.
  templateUrl: './register.component.html', // Ruta al archivo de plantilla HTML del componente.
})
export default class RegisterComponent implements OnDestroy {
  // Define la clase del componente y la hace implementadora de OnDestroy.
  // Inyección de dependencias para los servicios utilizados en el componente.
  private AuthService: AuthService = inject(AuthService); // Servicio de autenticación.
  private formBuilder: FormBuilder = inject(FormBuilder); // Constructor de formularios.
  private router: Router = inject(Router); // Enrutador para navegación.
  private registerSubscribe: Subscription = new Subscription(); // Suscripción para manejar el registro.

  // Definición del formulario reactivo con validaciones.
  public formRegister = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]], // Campo nombre, requerido y mínimo 3 caracteres.
    email: ['', [Validators.required, Validators.email]], // Campo email, requerido y debe ser un correo válido.
    password: ['', [Validators.required, Validators.minLength(6)]], // Campo contraseña, requerido y mínimo 6 caracteres.
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]], // Campo confirmación de contraseña.
  });

  // Método que se ejecuta al destruir el componente, se usa para limpiar suscripciones.
  ngOnDestroy(): void {
    this.registerSubscribe.unsubscribe(); // Cancela la suscripción para evitar fugas de memoria.
  }

  // Método para manejar el registro de usuario.
  register() {
    // Captura los valores de los campos del formulario.
    const fullName: string = this.formRegister.value.fullName as string; // Nombre completo.
    const email: string = this.formRegister.value.email as string; // Correo electrónico.
    const password: string = this.formRegister.value.password as string; // Contraseña.
    const confirmPassword: string = this.formRegister.value
      .confirmPassword as string; // Confirmación de contraseña.

    // Verifica si el formulario es válido y si las contraseñas coinciden.
    if (this.formRegister.valid && password === confirmPassword) {
      // Llama al servicio de registro y maneja la respuesta.
      this.registerSubscribe = this.AuthService.register({
        fullName,
        email,
        password,
      }).subscribe({
        next: (user) => {
          this.router.navigate(['/']); // Redirige al usuario a la página de inicio.
          // Muestra un mensaje de éxito.
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Usuario ${user.fullName} registrado`, // Mensaje de éxito con el nombre del usuario.
            showConfirmButton: false, // Oculta el botón de confirmación.
            timer: 1500, // Duración de la alerta.
          });
        },
        error: (error) => {
          // Muestra un mensaje de error.
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Oops...',
            text: error.message, // Mensaje de error específico.
          });
        },
      });
    }
  }

  // Métodos para acceder a los campos del formulario.
  get fullName() {
    return this.formRegister.get<string>('fullName'); // Retorna el control de nombre.
  }

  get email() {
    return this.formRegister.get<string>('email'); // Retorna el control de email.
  }

  get password() {
    return this.formRegister.get('password'); // Retorna el control de contraseña.
  }

  get confirmPassword() {
    return this.formRegister.get('confirmPassword'); // Retorna el control de confirmación de contraseña.
  }

  // Métodos para verificar la validez de los campos.
  get fullNameInvalid() {
    if (!this.fullName) return false; // Verifica si el campo existe.
    return this.fullName.invalid && this.fullName.touched; // Retorna verdadero si es inválido y ha sido tocado.
  }

  get emailInvalid() {
    if (!this.email) return false; // Verifica si el campo existe.
    return this.email.invalid && this.email.touched; // Retorna verdadero si es inválido y ha sido tocado.
  }

  get passwordInvalid() {
    if (!this.password) return false; // Verifica si el campo existe.
    return this.password.invalid && this.password.touched; // Retorna verdadero si es inválido y ha sido tocado.
  }

  get confirmPasswordInvalid() {
    if (!this.confirmPassword) return false; // Verifica si el campo existe.
    if (this.confirmPassword.value !== this?.password?.value) return true; // Verifica si las contraseñas coinciden.
    return this.confirmPassword.invalid && this.confirmPassword.touched; // Retorna verdadero si es inválido y ha sido tocado.
  }
}
