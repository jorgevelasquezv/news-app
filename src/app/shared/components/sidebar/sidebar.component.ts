import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PopularArticlesComponent } from '../popular-articles/popular-articles.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    PopularArticlesComponent,
    SideMenuComponent
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent { }
