import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'shared-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  private userService: UserService = inject(UserService);

  public verifityUser(): void{
    if (!this.userService.user()) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Oops...',
        text: 'Debes iniciar sesión para ver esta sección',
      });
    }
  }
}
