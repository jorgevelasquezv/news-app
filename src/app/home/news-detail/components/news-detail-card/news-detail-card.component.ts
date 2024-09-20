// Importa CommonModule desde Angular, que proporciona las funcionalidades comunes necesarias para los componentes.
import { CommonModule } from '@angular/common';

// Importa Component, input y InputSignal desde Angular core.
import { Component, input, InputSignal } from '@angular/core';

// Importa la interfaz Article desde el archivo de interfaces para usarla como tipo.
import { Article } from '../../../../domain/interfaces/api-news-response.interface';

// Define un componente llamado NewsDetailCardComponent.
@Component({
  // Selector del componente, que se usará en otras plantillas HTML.
  selector: 'news-detail-card',

  // Indica que este componente es autónomo (standalone) y no necesita ser declarado en un módulo.
  standalone: true,

  // Importa el CommonModule, que contiene funcionalidades comunes para este componente.
  imports: [CommonModule],

  // Ruta al archivo de plantilla HTML que define la vista del componente.
  templateUrl: './news-detail-card.component.html',
})

// Exporta la clase NewsDetailCardComponent.
export class NewsDetailCardComponent {
  // Define una propiedad llamada news de tipo InputSignal, que se usará para recibir datos desde el exterior.
  public news: InputSignal<Article> = input.required<Article>(); // Se marca como requerido para asegurar que se proporcione un artículo.
}
