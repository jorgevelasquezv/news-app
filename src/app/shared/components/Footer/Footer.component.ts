import { CommonModule } from '@angular/common'; // Importa el módulo común de Angular, que proporciona funcionalidades básicas como ngIf, ngFor, etc.
import { Component } from '@angular/core'; // Importa el decorador Component de Angular para definir un componente.

@Component({
  selector: 'shared-footer', // Define el selector del componente, que se usará en la plantilla para incluir este footer.
  standalone: true, // Indica que este componente es autónomo y puede ser utilizado sin un módulo padre.
  imports: [
    CommonModule, // Especifica que se está importando CommonModule, necesario para las funcionalidades del componente.
  ],
  templateUrl: './Footer.component.html', // Indica la ubicación del archivo de plantilla HTML que define la vista del componente.
})
export class FooterComponent {} // Exporta la clase FooterComponent, que representa el componente del footer.
