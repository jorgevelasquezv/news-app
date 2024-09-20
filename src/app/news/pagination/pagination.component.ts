import { CommonModule } from '@angular/common'; // Importa el módulo común de Angular para usar directivas y pipes básicos.
import {
  Component, // Importa el decorador Component de Angular.
  computed, // Importa la función computed para crear propiedades derivadas reactivas.
  input, // Importa la función input para declarar propiedades de entrada.
  InputSignal, // Importa el tipo InputSignal para señales de entrada.
  signal, // Importa la función signal para crear señales reactivas.
  WritableSignal, // Importa el tipo WritableSignal para señales que se pueden escribir.
} from '@angular/core'; // Importa todo desde el núcleo de Angular.
import { Article } from '../../domain/interfaces/api-news-response.interface'; // Importa la interfaz Article para definir la estructura de los artículos.

@Component({
  selector: 'news-pagination', // Define el selector del componente.
  standalone: true, // Marca el componente como autónomo.
  imports: [CommonModule], // Especifica que se importará el módulo común.
  templateUrl: './pagination.component.html', // Define la plantilla HTML del componente.
})
export class PaginationComponent {
  public newsList: InputSignal<Article[]> = input.required<Article[]>();
  // Define una señal de entrada que requiere un array de artículos.

  public paginatedNewsList: InputSignal<WritableSignal<Article[]>> =
    input.required<WritableSignal<Article[]>>();
  // Define una señal de entrada que requiere una señal escribible de artículos paginados.

  public currentPage = signal(1);
  // Inicializa una señal que mantiene la página actual, comenzando en la página 1.

  public itemsPerPage = 6;
  // Define el número de artículos a mostrar por página.

  public totalPages = computed(() => {
    return Math.ceil(this.newsList().length / this.itemsPerPage);
    // Calcula el número total de páginas dividiendo el número de artículos entre los artículos por página y redondeando hacia arriba.
  });

  private paginateNewsList() {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    // Calcula el índice de inicio para la paginación.

    const endIndex = startIndex + this.itemsPerPage;
    // Calcula el índice final para la paginación.

    return this.newsList().slice(startIndex, endIndex);
    // Devuelve una sección del array de artículos que corresponde a la página actual.
  }

  public changePage(page: number) {
    this.currentPage.set(page);
    // Establece la página actual a la página seleccionada.

    this.paginatedNewsList().set(this.paginateNewsList());
    // Actualiza la lista de artículos paginados en función de la nueva página.
  }
}
