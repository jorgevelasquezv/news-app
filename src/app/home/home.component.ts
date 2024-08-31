import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { NewsCardComponent } from "../shared/components/news-card/news-card.component";
import { NewsService } from '../services/news.service';
import { Article } from '../domain/interfaces/api-news-response.interface';
import { responseApiNewsTest } from '../data/api-response';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NewsCardComponent,
    SidebarComponent,
],
  templateUrl: './home.component.html',
})
export default class HomeComponent implements OnInit {
  private newsServices: NewsService = inject(NewsService);

  public newsList: Article[] = responseApiNewsTest;

  ngOnInit(): void {
    // this.newsServices.getNews().subscribe((data) => {
    //   this.newsList = data;
    // });
  }



 }
