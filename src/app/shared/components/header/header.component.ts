import { CommonModule } from '@angular/common';
// Importa el módulo común de Angular que proporciona directivas y pipes básicos.

import { Component } from '@angular/core';
// Importa el decorador Component que permite definir un componente Angular.

@Component({
  selector: 'shared-header',
  // Define el selector del componente, que se usará en las plantillas HTML como <shared-header>.

  standalone: true,
  // Indica que este componente es autónomo y no depende de otros módulos.

  imports: [
    CommonModule,
    // Incluye el CommonModule, que permite el uso de directivas y pipes comunes en este componente.
  ],

  templateUrl: './header.component.html',
  // Especifica la ubicación de la plantilla HTML del componente.
})
export class HeaderComponent {
  // Define la clase del componente. Actualmente no tiene propiedades o métodos adicionales.
}
