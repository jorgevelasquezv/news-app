import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; // Importa ApplicationConfig para definir la configuración de la aplicación y provideZoneChangeDetection para manejar los cambios de detección de zona.
import { provideRouter, withComponentInputBinding } from '@angular/router'; // Importa provideRouter para configurar el enrutamiento y withComponentInputBinding para enlazar entradas de componentes.

import { routes } from './app.routes'; // Importa las rutas definidas en el archivo app.routes.

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http'; // Importa provideHttpClient para habilitar el cliente HTTP y withInterceptorsFromDi para usar interceptores definidos en la inyección de dependencias.

export const appConfig: ApplicationConfig = {
  // Define la constante appConfig como un objeto de configuración de la aplicación.
  providers: [
    // Especifica los proveedores que se utilizarán en la aplicación.
    provideZoneChangeDetection({ eventCoalescing: true }), // Configura la detección de cambios de zona con la coalescencia de eventos habilitada.
    provideRouter(routes, withComponentInputBinding()), // Proporciona el enrutador utilizando las rutas definidas y habilita el enlace de entradas de componentes.
    provideHttpClient(withInterceptorsFromDi()), // Proporciona el cliente HTTP y activa los interceptores a partir de la inyección de dependencias.
  ],
};
