import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { NewsDetailCardComponent } from './components/news-detail-card/news-detail-card.component';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'news-detail',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NewsDetailCardComponent,
  ],
  templateUrl: './news-detail.component.html',
})
export default class NewsDetailComponent {
  private NewsService: NewsService = inject(NewsService);

  public news = this.NewsService.newsDetail;
}
