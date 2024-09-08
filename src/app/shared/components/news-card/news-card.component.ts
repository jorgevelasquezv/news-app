import { NewsService } from './../../../services/news.service';
import { CommonModule } from '@angular/common';
import { Component, inject, input, InputSignal, Signal } from '@angular/core';
import { Article } from '../../../domain/interfaces/api-news-response.interface';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../domain/models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'news-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-card.component.html',
})
export class NewsCardComponent {
  private router: Router = inject(Router);

  public news: InputSignal<Article> = input.required<Article>();

  private newsService: NewsService = inject(NewsService);

  private userService: UserService = inject(UserService);

  public user: Signal<User | undefined> = this.userService.user;

  public openNewsDetail(): void {
    if (!this.user()) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Oops...',
        text: 'Debes iniciar sesión para ver los detalles de la noticia',
      });
      return;
    }
    this.newsService.newsDetail = this.news();
    this.router.navigate(['/news/news-detail/', this.news().id]);
  }
}
