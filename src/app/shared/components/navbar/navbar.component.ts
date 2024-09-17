import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../domain/models/user.model';
import { Role } from '../../../domain/enums/role.enum';
import { AuthService } from '../../../auth/services/auth.service';
import Swal from 'sweetalert2';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private router: Router = inject(Router);
  private userServices: UserService = inject(UserService);
  private authService: AuthService = inject(AuthService);
  public user: Signal<User | undefined> = this.userServices.user;

  public get isAdmin(): boolean {
    return this.user()?.role === Role.Admin;
  }

  public logout(): void {
    this.authService.logout();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Sesión cerrada correctamente',
      showConfirmButton: false,
      timer: 1500,
    });
    this.router.navigate(['/']);
  }
}
