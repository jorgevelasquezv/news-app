import { HttpClient } from '@angular/common/http';
import {
  inject,
  Injectable,
  OnDestroy,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import {
  APINewsResponse,
  Article,
} from '../domain/interfaces/api-news-response.interface';
import { map, Observable, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { v4 as uuidv4 } from 'uuid';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewsCategory } from '../domain/enums/news-category.enum';

@Injectable({
  providedIn: 'root',
})
export class NewsService implements OnDestroy {
  private http: HttpClient = inject(HttpClient);

  private URL: string = environment.apiUrl;

  private URL_NEWS = environment.apiNewsUrl;

  private API_KEY = environment.apiKey;

  private newsList: Observable<Article[]> = new Observable<Article[]>();

  private newsSuscriptions: Subscription;

  private newsBusinessSuscriptions: Subscription;

  private newsDetail$: WritableSignal<Article> = signal<Article>({
    source: {
      id: null,
      name: '',
    },
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: null,
    publishedAt: new Date(),
    content: '',
  });

  public homeNews: Signal<Article[] | undefined>;

  public newsBussiness: Observable<Article[]> = new Observable<Article[]>();

  constructor() {
    this.newsSuscriptions = this.getNewsByCategory(NewsCategory.news)
      .pipe((data) => {
        this.newsList = data;
        return data;
      })
      .subscribe();

    this.newsBusinessSuscriptions = this.getNewsByCategory(
      NewsCategory.business
    )
      .pipe((data) => {
        this.newsBussiness = data;
        return data;
      })
      .subscribe();

    this.homeNews = toSignal(
      this.newsList.pipe(map((data) => data.slice(0, 4)))
    );
  }

  ngOnDestroy(): void {
    this.newsSuscriptions.unsubscribe();
    this.newsBusinessSuscriptions.unsubscribe();
  }

  public set newsDetail(news: Article) {
    this.newsDetail$.set(news);
  }

  public get newsDetail(): Article {
    return this.newsDetail$();
  }

  getNewsByCategory(category: NewsCategory): Observable<Article[]> {
    return this.http.get<APINewsResponse>(`${this.URL}/${category}`).pipe(
      map((response) => {
        return response.articles.map((article) => {
          article.id = uuidv4();
          return article;
        });
      })
    );
  }

  getNewsBySearch(search: string): Observable<Article[]> {
    return this.http
      .get<APINewsResponse>(`${this.URL_NEWS}`, {
        params: { q: search, apiKey: this.API_KEY },
      })
      .pipe(
        map((response) => {
          return response.articles.map((article) => {
            article.id = uuidv4();
            return article;
          });
        })
      );
  }
}
