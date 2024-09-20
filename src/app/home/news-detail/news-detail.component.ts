// Importa CommonModule desde Angular, que proporciona las funcionalidades comunes necesarias para los componentes.
import { CommonModule } from '@angular/common';

// Importa Component e inject desde Angular core.
import { Component, inject } from '@angular/core';

// Importa el componente SidebarComponent desde la ruta especificada.
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

// Importa el componente NewsDetailCardComponent desde la ruta especificada.
import { NewsDetailCardComponent } from './components/news-detail-card/news-detail-card.component';

// Importa el servicio NewsService desde la ruta especificada.
import { NewsService } from '../../services/news.service';

// Define un componente llamado NewsDetailComponent.
@Component({
  // Selector del componente, que se usará en otras plantillas HTML.
  selector: 'news-detail',

  // Indica que este componente es autónomo (standalone) y no necesita ser declarado en un módulo.
  standalone: true,

  // Importa los módulos y componentes necesarios para este componente.
  imports: [
    CommonModule, // Módulo común de Angular.
    SidebarComponent, // Componente de la barra lateral.
    NewsDetailCardComponent, // Componente para mostrar los detalles de la noticia.
  ],

  // Ruta al archivo de plantilla HTML que define la vista del componente.
  templateUrl: './news-detail.component.html',
})

// Exporta la clase NewsDetailComponent.
export default class NewsDetailComponent {
  // Inyecta el servicio NewsService para poder usar sus funcionalidades.
  private NewsService: NewsService = inject(NewsService);

  // Define una propiedad llamada news que almacena los detalles de la noticia obtenidos del servicio.
  public news = this.NewsService.newsDetail;
}
