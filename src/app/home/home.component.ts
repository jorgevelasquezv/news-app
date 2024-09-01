import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { NewsCardComponent } from '../shared/components/news-card/news-card.component';
import { NewsService } from '../services/news.service';
import { Article } from '../domain/interfaces/api-news-response.interface';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, SidebarComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent {
  private newsServices: NewsService = inject(NewsService);

  public newsList: Signal<Article[] | undefined> = this.newsServices.homeNews;
}
