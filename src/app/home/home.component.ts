import { CommonModule } from '@angular/common';
// Importa el módulo común de Angular, que proporciona directivas y pipes básicos.

import { Component, inject, Signal } from '@angular/core';
// Importa las funcionalidades de Angular:
// - Component: Decorador para definir un componente.
// - inject: Función para inyectar servicios.
// - Signal: Tipo para representar señales reactivas.

import { NewsCardComponent } from '../shared/components/news-card/news-card.component';
// Importa el componente NewsCard, que muestra las noticias.

import { NewsService } from '../services/news.service';
// Importa el servicio NewsService, que maneja la lógica de negocio relacionada con las noticias.

import { Article } from '../domain/interfaces/api-news-response.interface';
// Importa la interfaz Article, que define la estructura de una noticia.

import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
// Importa el componente Sidebar, que representa la barra lateral de navegación.

@Component({
  selector: 'app-home',
  // Define el selector del componente, que se utilizará en el HTML para referenciar este componente.

  standalone: true,
  // Indica que este componente es independiente y puede ser utilizado sin necesidad de estar en un módulo.

  imports: [CommonModule, NewsCardComponent, SidebarComponent],
  // Lista de módulos y componentes que se utilizan en este componente.

  templateUrl: './home.component.html',
  // Ruta del archivo HTML que define la plantilla del componente.
})
export default class HomeComponent {
  private newsServices: NewsService = inject(NewsService);
  // Inyecta el servicio NewsService para poder utilizar sus métodos.

  public newsList: Signal<Article[] | undefined> = this.newsServices.homeNews;
  // Define una señal pública 'newsList', que obtiene la lista de noticias desde el servicio.
}
