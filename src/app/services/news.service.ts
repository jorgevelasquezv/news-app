import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APINewsResponse, Article } from '../domain/interfaces/api-news-response.interface';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private http: HttpClient = inject(HttpClient);

  private URL: string = environment.apiUrl;

  private API_KEY: string = environment.apiKey;

  constructor() {}

  getNews(): Observable<Article[]> {
    return this.http
      .get<APINewsResponse>(this.URL, {
        params: {
          apiKey: this.API_KEY,
          q: 'weather',
          from: '2024-08-26',
          sortBy: 'popularity',
        },
      })
      .pipe(map((response) => response.articles));
  }
}
