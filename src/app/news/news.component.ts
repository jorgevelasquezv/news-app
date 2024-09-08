import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { NewsCardComponent } from '../shared/components/news-card/news-card.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { Article } from '../domain/interfaces/api-news-response.interface';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewsService } from '../services/news.service';
import { NewsCategory } from '../domain/enums/news-category.enum';

@Component({
  selector: 'news',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, SidebarComponent],
  templateUrl: './news.component.html',
})
export default class NewsComponent implements OnInit, OnDestroy {
  private route: ActivatedRoute = inject(ActivatedRoute);

  private newsServices: NewsService = inject(NewsService);

  public newsToRender: Article[] = [];

  private title$: Observable<string> = this.route.paramMap.pipe<string>(
    map((params) => params.get('category') ?? 'news')
  );

  public title: Signal<string | undefined> = toSignal<string>(this.title$);

  public newsList: Article[] = [];

  public newsListSuscription: Subscription = new Subscription();

  public currentPage = 1;

  public itemsPerPage = 6;

  public paginatedNewsList: WritableSignal<Article[]> = signal([]);

  ngOnInit(): void {
    this.newsListSuscription = this.route.paramMap
      .pipe(
        map((params) => (params.get('category') ?? 'news') as NewsCategory),
        switchMap((category) => this.newsServices.getNewsByCategory(category))
      )
      .subscribe((data) => {
        this.newsList = data;
        this.paginatedNewsList.set(this.paginateNewsList());
      });
  }

  ngOnDestroy(): void {
    this.newsListSuscription.unsubscribe();
  }

  private paginateNewsList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.newsList.slice(startIndex, endIndex);
  }

  public changePage(page: number) {
    this.currentPage = page;
    this.paginatedNewsList.set(this.paginateNewsList());
  }
}
