import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../domain/models/user.model';
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'shared-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  private userService: UserService = inject(UserService);
  public user: Signal<User | undefined> = this.userService.user;
  private router: Router = inject(Router);
  public query = '';

  public searchNews(query: string): void {
    if (!this.user()) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Oops...',
        text: 'Debes iniciar sesión para buscar noticias',
      });
    }

    if (query.trim().length === 0) return;
    this.router.navigate([`/news/search ${query}`]);
    this.query = '';
  }
}
