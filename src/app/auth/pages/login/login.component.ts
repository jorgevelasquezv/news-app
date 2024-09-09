import { AuthService } from './../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export default class LoginComponent implements OnDestroy {
  private AuthService: AuthService = inject(AuthService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);
  private loginSubscribe: Subscription = new Subscription();

  public formLogin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnDestroy(): void {
    this.loginSubscribe.unsubscribe();
  }

  login() {
    const email: string = this.formLogin.value.email as string;
    const password: string = this.formLogin.value.password as string;

    if (this.formLogin.valid) {
      this.loginSubscribe = this.AuthService.login(email, password).subscribe({
        next: (user) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Bienvenido ${user.fullName}`,
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['/']);
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

  get email() {
    return this.formLogin.get<string>('email');
  }

  get password() {
    return this.formLogin.get('password');
  }

  get emailInvalid() {
    if (!this.email) return false;
    return this.email.invalid && this.email.touched;
  }

  get passwordInvalid() {
    if (!this.password) return false;
    return this.password.invalid && this.password.touched;
  }
}
