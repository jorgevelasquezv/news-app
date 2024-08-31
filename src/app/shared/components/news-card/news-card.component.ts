import { CommonModule } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { Article } from '../../../domain/interfaces/api-news-response.interface';

@Component({
  selector: 'news-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './news-card.component.html',
})
export class NewsCardComponent {
  public news: InputSignal<Article> = input.required<Article>();
 }
