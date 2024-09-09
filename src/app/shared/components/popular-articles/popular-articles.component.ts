import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Article } from '../../../domain/interfaces/api-news-response.interface';
import { responseApiNewsTest } from '../../../data/api-response';

@Component({
  selector: 'shared-popular-articles',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './popular-articles.component.html',
})
export class PopularArticlesComponent {
  public popularArticles: Article[] = responseApiNewsTest;
}
