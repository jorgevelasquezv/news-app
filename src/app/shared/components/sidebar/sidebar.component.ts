import { CommonModule } from '@angular/common'; // Importa el módulo común de Angular para utilizar directivas y componentes básicos.
import { Component } from '@angular/core'; // Importa el decorador Component para definir un componente Angular.
import { PopularArticlesComponent } from '../popular-articles/popular-articles.component'; // Importa el componente de artículos populares para ser usado en la barra lateral.
import { SideMenuComponent } from '../side-menu/side-menu.component'; // Importa el componente de menú lateral para incluirlo en la barra lateral.

@Component({
  selector: 'shared-sidebar', // Define el selector del componente para su uso en plantillas.
  standalone: true, // Indica que este componente es independiente y no requiere un módulo específico.
  imports: [
    CommonModule, // Agrega el CommonModule para directivas básicas.
    PopularArticlesComponent, // Incluye el componente de artículos populares en este componente.
    SideMenuComponent, // Incluye el componente del menú lateral en este componente.
  ],
  templateUrl: './sidebar.component.html', // Especifica la ruta de la plantilla HTML del componente.
})
export class SidebarComponent {} // Define la clase del componente SidebarComponent sin lógica adicional por el momento.
