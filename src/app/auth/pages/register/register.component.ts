import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export default class RegisterComponent implements OnDestroy {
  private AuthService: AuthService = inject(AuthService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);
  private registerSubscribe: Subscription = new Subscription();

  public formRegister = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnDestroy(): void {
    this.registerSubscribe.unsubscribe();
  }

  register() {
    const fullName: string = this.formRegister.value.fullName as string;
    const email: string = this.formRegister.value.email as string;
    const password: string = this.formRegister.value.password as string;
    const confirmPassword: string = this.formRegister.value.confirmPassword as string;

    if (this.formRegister.valid && password === confirmPassword) {
      this.registerSubscribe = this.AuthService.register({ fullName, email, password }).subscribe({
        next: (user) => {
          this.router.navigate(['/']);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Usuario ${user.fullName} registrado`,
            showConfirmButton: false,
            timer: 1500,
          });
        },
        error: (error) => {
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

  get fullName() {
    return this.formRegister.get<string>('fullName');
  }

  get email() {
    return this.formRegister.get<string>('email');
  }

  get password() {
    return this.formRegister.get('password');
  }

  get confirmPassword() {
    return this.formRegister.get('confirmPassword');
  }

  get fullNameInvalid() {
    if (!this.fullName) return false;
    return this.fullName.invalid && this.fullName.touched;
  }

  get emailInvalid() {
    if (!this.email) return false;
    return this.email.invalid && this.email.touched;
  }

  get passwordInvalid() {
    if (!this.password) return false;
    return this.password.invalid && this.password.touched;
  }

  get confirmPasswordInvalid() {
    if (!this.confirmPassword) return false;
    if (this.confirmPassword.value !== this?.password?.value) return true;
    return this.confirmPassword.invalid && this.confirmPassword.touched;
  }
}
