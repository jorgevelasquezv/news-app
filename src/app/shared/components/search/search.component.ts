import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  private router: Router = inject(Router);
  public query = '';

  public searchNews(query: string): void {
    if (query.trim().length === 0) return;
    this.router.navigate([`/news/search ${query}`]);
    this.query = '';
  }
}
