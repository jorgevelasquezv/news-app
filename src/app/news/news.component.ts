import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { NewsCardComponent } from '../shared/components/news-card/news-card.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { Article } from '../domain/interfaces/api-news-response.interface';
import { responseApiNewsTest } from '../data/api-response';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'news',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, SidebarComponent],
  templateUrl: './news.component.html',
})
export default class NewsComponent{
  private route = inject(ActivatedRoute);

  public title = toSignal (
    this.route.paramMap
      .pipe(switchMap((params) => of(params.get('category') ?? 'News')))
  );

  public newsList: Article[] = responseApiNewsTest;

}
