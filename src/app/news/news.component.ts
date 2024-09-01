import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { NewsCardComponent } from '../shared/components/news-card/news-card.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { Article } from '../domain/interfaces/api-news-response.interface';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewsService } from '../services/news.service';
import { NewsCategory } from '../domain/enums/news-category.enum';

@Component({
  selector: 'news',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, SidebarComponent],
  templateUrl: './news.component.html',
})
export default class NewsComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private newsServices: NewsService = inject(NewsService);

  public newsToRender: Article[] = [];

  private title$ = this.route.paramMap.pipe<string>(
    map((params) => params.get('category') ?? 'news')
  );

  public title: Signal<string | undefined> = toSignal<string>(this.title$);

  public newsList = toSignal(
    this.route.paramMap.pipe(
      map((params) => (params.get('category') ?? 'news') as NewsCategory),
      switchMap((category) => this.newsServices.getNewsByCategory(category))
    )
  );
}
