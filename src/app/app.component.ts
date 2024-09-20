import { Component } from '@angular/core'; // Importa el decorador Component para definir un componente Angular.
import { RouterOutlet } from '@angular/router'; // Importa RouterOutlet para la gestión de rutas en la aplicación.
import { NavbarComponent } from './shared/components/navbar/navbar.component'; // Importa el componente de navegación (navbar) para incluirlo en la aplicación.
import { FooterComponent } from './shared/components/Footer/Footer.component'; // Importa el componente de pie de página (footer) para incluirlo en la aplicación.
import { HeaderComponent } from './shared/components/header/header.component'; // Importa el componente de encabezado (header) para incluirlo en la aplicación.

@Component({
  selector: 'app-root', // Define el selector del componente, utilizado en la plantilla principal.
  standalone: true, // Indica que este componente es independiente y no requiere un módulo específico.
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HeaderComponent], // Especifica los módulos y componentes que se utilizarán en este componente.
  templateUrl: './app.component.html', // Especifica la ruta de la plantilla HTML que se usará para este componente.
  styleUrls: ['./app.component.css'], // Especifica la ruta de los estilos CSS que se aplicarán a este componente.
})
export class AppComponent {
  // Define la clase del componente AppComponent.
  title = 'news-app'; // Define una propiedad 'title' que puede ser utilizada en la plantilla.
}
