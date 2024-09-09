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
  private createUserSubscribe: Subscription = new Subscription();

  public formCreateUser = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['', [Validators.required,]]
  });

  ngOnDestroy(): void {
    this.createUserSubscribe.unsubscribe();
  }

  createUser() {
    const fullName: string = this.formCreateUser.value.fullName as string;
    const email: string = this.formCreateUser.value.email as string;
    const password: string = this.formCreateUser.value.password as string;

    this.createUserSubscribe = this.AuthService.register({
      fullName,
      email,
      password,
    }).subscribe({
      next: (user) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Usuario ${user.fullName} registrado`,
          showConfirmButton: false,
          timer: 1500,
        });
        this.formCreateUser.reset();
        this.AuthService.setUsers([...this.AuthService.users(), user]);
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

  get fullName() {
    return this.formCreateUser.get<string>('fullName');
  }

  get email() {
    return this.formCreateUser.get<string>('email');
  }

  get password() {
    return this.formCreateUser.get('password');
  }

  get role() {
    return this.formCreateUser.get('role');
  }

  get confirmPassword() {
    return this.formCreateUser.get('confirmPassword');
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

  get rolInvalid() {
    if (!this.role) return false;
    return this.role.invalid && this.role.touched;
  }

  get confirmPasswordInvalid() {
    if (!this.confirmPassword) return false;
    if (this.confirmPassword.value !== this?.password?.value) return true;
    return this.confirmPassword.invalid && this.confirmPassword.touched;
  }
}
