import { bootstrapApplication } from '@angular/platform-browser'; // Importa la función bootstrapApplication para iniciar la aplicación Angular en el navegador.
import { appConfig } from './app/app.config'; // Importa la configuración de la aplicación desde app.config.
import { AppComponent } from './app/app.component'; // Importa el componente raíz de la aplicación, AppComponent.

bootstrapApplication(AppComponent, appConfig) // Llama a bootstrapApplication pasando el componente raíz y la configuración.
  .catch((err) => console.error(err)); // Captura cualquier error durante el arranque y lo muestra en la consola.
