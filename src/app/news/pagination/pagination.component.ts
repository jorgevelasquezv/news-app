import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';
import { Article } from '../../domain/interfaces/api-news-response.interface';

@Component({
  selector: 'news-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  public newsList: InputSignal<Article[]> = input.required<Article[]>();

  public paginatedNewsList: InputSignal<WritableSignal<Article[]>> =
    input.required<WritableSignal<Article[]>>();

  public currentPage = signal(1);

  public itemsPerPage = 6;

  public totalPages = computed(() => {
    return Math.ceil(this.newsList().length / this.itemsPerPage);
  });

  private paginateNewsList() {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.newsList().slice(startIndex, endIndex);
  }

  public changePage(page: number) {
    this.currentPage.set(page);
    this.paginatedNewsList().set(this.paginateNewsList());
  }
}
