import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'admin-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent implements OnDestroy {
  private AuthService: AuthService = inject(AuthService);
  private formBuilder: FormBuilder = inject(FormBuilder);

  // Suscripción para el registro del usuario
  private createUserSubscribe: Subscription = new Subscription();

  // Definición del formulario para crear un usuario
  public formCreateUser = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['', [Validators.required]],
  });

  // Método que se ejecuta cuando el componente se destruye
  ngOnDestroy(): void {
    // Desuscribirse de la suscripción para evitar fugas de memoria
    this.createUserSubscribe.unsubscribe();
  }

  // Método para crear un usuario
  createUser() {
    // Obtener los valores del formulario
    const fullName: string = this.formCreateUser.value.fullName as string;
    const email: string = this.formCreateUser.value.email as string;
    const password: string = this.formCreateUser.value.password as string;

    // Llamar al servicio de autenticación para registrar el usuario
    this.createUserSubscribe = this.AuthService.register({
      fullName,
      email,
      password,
    }).subscribe({
      next: (user) => {
        // Mostrar una alerta de éxito cuando el usuario se registra correctamente
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Usuario ${user.fullName} registrado`,
          showConfirmButton: false,
          timer: 1500,
        });
        // Reiniciar el formulario
        this.formCreateUser.reset();
        // Actualizar la lista de usuarios en el servicio de autenticación
        this.AuthService.setUsers([...this.AuthService.users(), user]);
      },
      // Manejar el error en caso de que falle el registro del usuario
      error: (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Oops...',
          text: error.message, // Mostrar el mensaje de error
        });
      },
    });
  }

  // Getter para obtener el control del formulario 'fullName'
  get fullName() {
    return this.formCreateUser.get<string>('fullName');
  }

  // Getter para obtener el control del formulario 'email'
  get email() {
    return this.formCreateUser.get<string>('email');
  }

  // Getter para obtener el control del formulario 'password'
  get password() {
    return this.formCreateUser.get('password');
  }

  // Getter para obtener el control del formulario 'role'
  get role() {
    return this.formCreateUser.get('role');
  }

  // Getter para obtener el control del formulario 'confirmPassword'
  get confirmPassword() {
    return this.formCreateUser.get('confirmPassword');
  }

  // Getter para verificar si el campo 'fullName' es inválido
  get fullNameInvalid() {
    if (!this.fullName) return false;
    return this.fullName.invalid && this.fullName.touched;
  }

  // Getter para verificar si el campo 'email' es inválido
  get emailInvalid() {
    if (!this.email) return false;
    return this.email.invalid && this.email.touched;
  }

  // Getter para verificar si el campo 'password' es inválido
  get passwordInvalid() {
    if (!this.password) return false;
    return this.password.invalid && this.password.touched;
  }

  // Getter para verificar si el campo 'role' es inválido
  get rolInvalid() {
    if (!this.role) return false;
    return this.role.invalid && this.role.touched;
  }

  // Getter para verificar si el campo 'confirmPassword' es inválido
  get confirmPasswordInvalid() {
    if (!this.confirmPassword) return false;
    if (this.confirmPassword.value !== this?.password?.value) return true;
    return this.confirmPassword.invalid && this.confirmPassword.touched;
  }
}
