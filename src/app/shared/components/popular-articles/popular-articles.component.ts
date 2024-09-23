import { CommonModule } from '@angular/common'; // Importa el módulo común de Angular para utilizar directivas y componentes básicos.
import { Component, inject, Signal } from '@angular/core'; // Importa decoradores y funcionalidades para la creación de componentes y señales.
import { Article } from '../../../domain/interfaces/api-news-response.interface'; // Importa la interfaz Article para tipar las noticias.
import { NewsService } from '../../../services/news.service'; // Importa el servicio de noticias para acceder a métodos relacionados.
import { map } from 'rxjs'; // Importa el operador map de RxJS para transformar los datos en flujos observables.
import { toSignal } from '@angular/core/rxjs-interop'; // Importa la función toSignal para convertir observables en señales reactivas.
import { User } from '../../../domain/models/user.model'; // Importa la interfaz User para tipar los usuarios.
import { UserService } from '../../../services/user.service'; // Importa el servicio de usuario para acceder a datos y métodos del usuario.
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar alertas personalizadas.
import { Router } from '@angular/router'; // Importa el enrutador de Angular para navegar entre rutas.
import { NewsCategory } from '../../../domain/enums/news-category.enum';

@Component({
  selector: 'shared-popular-articles', // Define el selector del componente para su uso en plantillas.
  standalone: true, // Indica que este componente es independiente y no requiere un módulo Angular específico.
  imports: [CommonModule], // Importa el módulo común para usar directivas y componentes básicos.
  templateUrl: './popular-articles.component.html', // Especifica la ruta de la plantilla HTML del componente.
})
export class PopularArticlesComponent {
  private userService: UserService = inject(UserService); // Inyecta el servicio de usuario para acceder a su funcionalidad.
  private user: Signal<User | undefined> = this.userService.user; // Crea una señal que representa el estado del usuario (definido o no).
  private router: Router = inject(Router); // Inyecta el enrutador para manejar la navegación.
  private newsService: NewsService = inject(NewsService); // Inyecta el servicio de noticias para acceder a sus métodos.

  // Crea una señal que almacena los artículos populares, obtenidos del servicio de noticias.
  public popularArticles: Signal<Article[] | undefined> = toSignal(
    this.newsService
      .getNewsByCategory(NewsCategory.popular) // Llama al método del servicio para buscar noticias populares.
      .pipe(map((news) => news.slice(0, 4))) || [] // Toma solo los primeros 4 artículos y los convierte a señal.
  );

  // Método para abrir los detalles de una noticia.
  public openNewsDetail(news: Article): void {
    // Verifica si el usuario está definido.
    if (!this.user()) {
      Swal.fire({
        // Muestra una alerta si el usuario no ha iniciado sesión.
        position: 'center', // Posiciona la alerta en el centro.
        icon: 'error', // Tipo de alerta: error.
        title: 'Oops...', // Título de la alerta.
        text: 'You must log in to see the news details', // Mensaje de error.
      });
      return; // Sale del método si no hay usuario.
    }
    this.newsService.newsDetail = news; // Establece la noticia seleccionada en el servicio de noticias.
    this.router.navigate(['/news/news-detail/', news.id]); // Navega a la ruta de detalles de la noticia específica.
  }
}
