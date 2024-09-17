import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { Article } from '../../../domain/interfaces/api-news-response.interface';
import { NewsService } from '../../../services/news.service';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../../../domain/models/user.model';
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-popular-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-articles.component.html',
})
export class PopularArticlesComponent {
  private userService: UserService = inject(UserService);
  private user: Signal<User | undefined> = this.userService.user;
  private router: Router = inject(Router);
  private newsService: NewsService = inject(NewsService);
  public popularArticles: Signal<Article[] | undefined> = toSignal(
    this.newsService
      .getNewsBySearch('popular news')
      .pipe(map((news) => news.slice(0, 4))) || []
  );

  public openNewsDetail(news: Article): void {
    if (!this.user()) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Oops...',
        text: 'Debes iniciar sesión para ver los detalles de la noticia',
      });
      return;
    }
    this.newsService.newsDetail = news;
    this.router.navigate(['/news/news-detail/', news.id]);
  }
}
