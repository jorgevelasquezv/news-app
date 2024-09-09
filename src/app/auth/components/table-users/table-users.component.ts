import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnDestroy,
  signal,
  WritableSignal,
} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../domain/models/user.model';
import { Subscription } from 'rxjs';
import { EditUserComponent } from '../edit-user/edit-user.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'admin-table-users',
  standalone: true,
  imports: [CommonModule, EditUserComponent],
  templateUrl: './table-users.component.html',
})
export class TableUsersComponent implements OnDestroy {
  private authService: AuthService = inject(AuthService);
  private usersSubscription: Subscription = new Subscription();
  private userUpdateSubscription: Subscription = new Subscription();
  private userDeleteSubscription: Subscription = new Subscription();
  public users: WritableSignal<User[]> = signal([]);
  public selectedUser: User | null = null;
  public isModalOpen = signal<boolean>(false);

  constructor() {
    this.usersSubscription = this.authService.findUsers().subscribe((users) => {
      this.users.set(users);
    });
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

  toggleActive(user: User): void {
    user.isActive = !user.isActive;
    this.updateUser(user);
  }

  deleteUser(user: User): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Estás a punto de eliminar a ${user.fullName}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userDeleteSubscription = this.authService
          .deleteUser(user)
          .subscribe();
        this.userDeleteSubscription.unsubscribe();
        this.users.set(this.users().filter((u) => u.id !== user.id));
        Swal.fire('Eliminado', 'El usuario ha sido eliminado', 'success');
      }
    });
  }

  updateUser(user: User): void {
    this.userUpdateSubscription = this.authService.updtaeUser(user).subscribe();
    this.userUpdateSubscription.unsubscribe();
  }

  openEditModal(user: User) {
    this.selectedUser = user;
    this.isModalOpen.set(true);
  }

  closeEditModal() {
    this.isModalOpen.set(false);
    this.selectedUser = null;
  }
}
