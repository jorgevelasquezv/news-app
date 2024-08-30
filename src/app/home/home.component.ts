import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { NewsCardComponent } from "./components/newsCard/newsCard.component";
import { NewsService } from '../services/news.service';
import { Article } from '../domain/interfaces/api-news-response.interface';
import { responseApiNewsTest } from '../data/api-response';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NewsCardComponent
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
