import { CommonModule } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { Article } from '../../../../domain/interfaces/api-news-response.interface';

@Component({
  selector: 'news-detail-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-detail-card.component.html',
})
export class NewsDetailCardComponent {
  public news: InputSignal<Article> = input.required<Article>();
}
