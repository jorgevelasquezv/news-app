// Importación del módulo CommonModule de Angular, que proporciona directivas comunes como ngIf y ngFor.
import { CommonModule } from '@angular/common';

// Importación del decorador Component de Angular, que se utiliza para definir componentes.
import { Component } from '@angular/core';

// Decorador @Component: Define un componente de Angular.
@Component({
  // Selector que se usará para insertar el componente en otros lugares de la aplicación.
  selector: 'app-contact-us',

  // Indica que el componente es autónomo y puede funcionar sin un módulo específico.
  standalone: true,

  // Lista de módulos que este componente utiliza. En este caso, solo CommonModule.
  imports: [CommonModule],

  // Ruta del archivo de plantilla HTML que se usará para la vista del componente.
  templateUrl: './contact-us.component.html',
})

// Clase del componente que se exporta por defecto.
export default class ContactUsComponent {}
