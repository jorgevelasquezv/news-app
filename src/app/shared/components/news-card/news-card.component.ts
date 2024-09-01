import { NewsService } from './../../../services/news.service';
import { CommonModule } from '@angular/common';
import { Component, inject, input, InputSignal } from '@angular/core';
import { Article } from '../../../domain/interfaces/api-news-response.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'news-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news-card.component.html',
})
export class NewsCardComponent {
  public news: InputSignal<Article> = input.required<Article>();

  private NewsService: NewsService = inject(NewsService);

  public openNewsDetail(): void {
    this.NewsService.newsDetail = this.news();
  }
}
