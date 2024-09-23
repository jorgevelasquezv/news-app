import { HttpClient } from '@angular/common/http';
// Importa HttpClient para realizar solicitudes HTTP.

import {
  inject,
  Injectable,
  OnDestroy,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
// Importa decoradores y tipos de Angular:
// - inject: Para inyectar dependencias.
// - Injectable: Marca la clase como un servicio inyectable.
// - OnDestroy: Interfaz para el ciclo de vida del servicio.
// - signal, Signal, WritableSignal: Tipos para manejar señales reactivas.

import {
  APINewsResponse,
  Article,
} from '../domain/interfaces/api-news-response.interface';
// Importa las interfaces APINewsResponse y Article que definen la estructura de los datos de noticias.

import { map, Observable, Subscription } from 'rxjs';
// Importa operadores y tipos de RxJS para trabajar con flujos de datos.

import { environment } from '../../environments/environment';
// Importa las variables de entorno para acceder a las URLs y la clave de API.

import { v4 as uuidv4 } from 'uuid';
// Importa uuid para generar identificadores únicos.

import { toSignal } from '@angular/core/rxjs-interop';
// Importa la función toSignal para convertir observables en señales de Angular.

import { NewsCategory } from '../domain/enums/news-category.enum';
// Importa la enumeración NewsCategory para las categorías de noticias.

@Injectable({
  providedIn: 'root',
})
// Marca la clase como un servicio inyectable que estará disponible en toda la aplicación.
export class NewsService implements OnDestroy {
  private http: HttpClient = inject(HttpClient);
  // Inyecta HttpClient para realizar solicitudes HTTP.

  private URL: string = environment.apiUrl;
  // Almacena la URL base de la API desde las variables de entorno.

  private URL_NEWS = environment.apiNewsUrl;
  // Almacena la URL específica de la API de noticias.

  private API_KEY = environment.apiKey;
  // Almacena la clave de API desde las variables de entorno.

  private newsList: Observable<Article[]> = new Observable<Article[]>();
  // Inicializa un observable para la lista de artículos de noticias.

  private newsSuscriptions: Subscription;
  // Declara una suscripción para manejar el flujo de datos de noticias.

  private newsBusinessSuscriptions: Subscription;
  // Declara una suscripción específica para noticias de negocios.

  private newsDetail$: WritableSignal<Article> = signal<Article>({
    source: {
      id: null,
      name: '',
    },
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: null,
    publishedAt: new Date(),
    content: '',
  });
  // Inicializa una señal reactiva para almacenar los detalles de una noticia.

  public homeNews: Signal<Article[] | undefined>;
  // Declara una señal reactiva para las noticias de la página de inicio.

  public newsBussiness: Observable<Article[]> = new Observable<Article[]>();
  // Inicializa un observable para la lista de artículos de noticias de negocios.

  constructor() {
    // Constructor del servicio.
    this.newsSuscriptions = this.getNewsByCategory(NewsCategory.news)
      .pipe((data) => {
        this.newsList = data;
        // Almacena los datos de noticias obtenidos en newsList.
        return data;
      })
      .subscribe();

    this.newsBusinessSuscriptions = this.getNewsByCategory(
      NewsCategory.business
    )
      .pipe((data) => {
        this.newsBussiness = data;
        // Almacena los datos de noticias de negocios en newsBussiness.
        return data;
      })
      .subscribe();

    this.homeNews = toSignal(
      this.newsList.pipe(map((data) => data.slice(0, 4)))
    );
    // Convierte el observable de noticias en una señal, limitando los resultados a los primeros 4 artículos.
  }

  ngOnDestroy(): void {
    // Método que se ejecuta al destruir el servicio.
    this.newsSuscriptions.unsubscribe();
    // Cancela la suscripción de noticias para evitar fugas de memoria.
    this.newsBusinessSuscriptions.unsubscribe();
    // Cancela la suscripción de noticias de negocios.
  }

  public set newsDetail(news: Article) {
    this.newsDetail$.set(news);
    // Método para establecer los detalles de una noticia, actualizando la señal.
  }

  public get newsDetail(): Article {
    return this.newsDetail$();
    // Método para obtener los detalles de la noticia desde la señal.
  }

  getNewsByCategory(category: NewsCategory): Observable<Article[]> {
    // Método para obtener noticias por categoría.
    return this.http.get<Article[]>(`${this.URL}/${category}`).pipe(
      map((response) => {
        return response.map((article) => {
          article.id = uuidv4();
          // Asigna un identificador único a cada artículo.
          return article;
        });
      })
    );
  }

  getNewsBySearch(search: string): Observable<Article[]> {
    // Método para buscar noticias usando un término de búsqueda.
    const query = search.slice(6).trimStart();

    return this.http
      .get<Article[]>(`${this.URL}/search`, {
        params: { title_like: query},
      })
      .pipe(
        map((response) => {
          return response.map((article) => {
            article.id = uuidv4();
            // Asigna un identificador único a cada artículo.
            return article;
          });
        })
      );
  }
}
