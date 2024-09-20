import { CommonModule } from '@angular/common';
// Importa el módulo común de Angular, que contiene directivas y componentes básicos.

import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
// Importa decoradores y tipos de Angular.
// - Component: Usado para definir un componente.
// - inject: Para inyectar servicios o dependencias.
// - OnDestroy y OnInit: Interfaces para el ciclo de vida del componente.
// - signal, Signal, WritableSignal: Tipos para manejar señales reactivas.

import { NewsCardComponent } from '../shared/components/news-card/news-card.component';
// Importa el componente para mostrar tarjetas de noticias.

import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
// Importa el componente de barra lateral.

import { Article } from '../domain/interfaces/api-news-response.interface';
// Importa la interfaz Article, que representa la estructura de un artículo de noticias.

import { ActivatedRoute } from '@angular/router';
// Importa ActivatedRoute para acceder a los parámetros de la ruta activa.

import { map, Observable, Subscription, switchMap } from 'rxjs';
// Importa operadores y tipos de RxJS para manejar flujos de datos reactivos.

import { toSignal } from '@angular/core/rxjs-interop';
// Importa la función toSignal para convertir observables en señales de Angular.

import { NewsService } from '../services/news.service';
// Importa el servicio de noticias, que proporciona métodos para obtener datos de noticias.

import { NewsCategory } from '../domain/enums/news-category.enum';
// Importa la enumeración NewsCategory para las categorías de noticias.

import { PaginationComponent } from './pagination/pagination.component';
// Importa el componente de paginación para manejar la navegación entre páginas de noticias.

@Component({
  selector: 'news',
  // Define el selector del componente, que se usará en la plantilla HTML.

  standalone: true,
  // Marca el componente como independiente, permitiendo que funcione sin un módulo específico.

  imports: [
    CommonModule,
    NewsCardComponent,
    SidebarComponent,
    PaginationComponent,
  ],
  // Importa los módulos y componentes necesarios para este componente.

  templateUrl: './news.component.html',
  // Especifica la plantilla HTML del componente.
})
export default class NewsComponent implements OnInit, OnDestroy {
  private route: ActivatedRoute = inject(ActivatedRoute);
  // Inyecta ActivatedRoute para acceder a los parámetros de la ruta.

  private newsServices: NewsService = inject(NewsService);
  // Inyecta el servicio de noticias para obtener datos.

  public newsToRender: Article[] = [];
  // Inicializa un arreglo para almacenar las noticias a renderizar.

  private title$: Observable<string> = this.route.paramMap.pipe<string>(
    map((params) => params.get('category') ?? 'news')
    // Transforma el parámetro 'category' en un observable de tipo string,
    // devolviendo 'news' si no se encuentra el parámetro.
  );

  public title: Signal<string | undefined> = toSignal<string>(this.title$);
  // Convierte el observable title$ en una señal reactiva para su uso en la plantilla.

  public newsList: Article[] = [];
  // Inicializa un arreglo para almacenar la lista de noticias.

  public newsListSuscription: Subscription = new Subscription();
  // Crea una suscripción para manejar el flujo de datos de noticias.

  public currentPage = 1;
  // Inicializa la página actual en 1.

  public itemsPerPage = 6;
  // Define cuántos elementos se mostrarán por página.

  public paginatedNewsList: WritableSignal<Article[]> = signal([]);
  // Inicializa una señal reactiva para la lista de noticias paginadas.

  ngOnInit(): void {
    // Método del ciclo de vida que se ejecuta al inicializar el componente.
    this.newsListSuscription = this.route.paramMap
      .pipe(
        map((params) => (params.get('category') ?? 'news') as NewsCategory),
        // Transforma el parámetro 'category' en un valor de tipo NewsCategory.

        switchMap((category) => {
          // Cambia a un nuevo observable basado en la categoría obtenida.
          if (!this.isValidCategory(category)) {
            return this.newsServices.getNewsBySearch(category);
            // Si la categoría no es válida, busca noticias por término de búsqueda.
          }
          return this.newsServices.getNewsByCategory(category);
          // Si es válida, obtiene noticias por categoría.
        })
      )
      .subscribe((data) => {
        this.newsList = data;
        // Asigna los datos de noticias recibidos a newsList.
        this.paginatedNewsList.set(this.paginateNewsList());
        // Actualiza la lista de noticias paginadas.
      });
  }

  ngOnDestroy(): void {
    // Método del ciclo de vida que se ejecuta al destruir el componente.
    this.newsListSuscription.unsubscribe();
    // Cancela la suscripción para evitar fugas de memoria.
  }

  private isValidCategory(category: string): boolean {
    // Método que verifica si la categoría es válida.
    return Object.values(NewsCategory).includes(category as NewsCategory);
    // Devuelve true si la categoría está en la enumeración NewsCategory.
  }

  private paginateNewsList() {
    // Método que pagina la lista de noticias.
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    // Calcula el índice inicial para la paginación.
    const endIndex = startIndex + this.itemsPerPage;
    // Calcula el índice final para la paginación.
    return this.newsList.slice(startIndex, endIndex);
    // Devuelve una sublista de noticias según los índices calculados.
  }

  public changePage(page: number) {
    // Método para cambiar la página de noticias.
    this.currentPage = page;
    // Establece la página actual al nuevo valor.
    this.paginatedNewsList.set(this.paginateNewsList());
    // Actualiza la lista de noticias paginadas.
  }
}
