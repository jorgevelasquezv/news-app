// Importación del módulo CommonModule de Angular, que proporciona directivas comunes como ngIf y ngFor.
import { CommonModule } from '@angular/common';

// Importación del decorador Component de Angular, que se utiliza para definir componentes.
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

// Decorador @Component: Define un componente de Angular.
@Component({
  // Selector que se usará para insertar el componente en otros lugares de la aplicación.
  selector: 'app-contact-us',

  // Indica que el componente es autónomo y puede funcionar sin un módulo específico.
  standalone: true,

  // Lista de módulos que este componente utiliza. En este caso, solo CommonModule.
  imports: [CommonModule, ReactiveFormsModule],

  // Ruta del archivo de plantilla HTML que se usará para la vista del componente.
  templateUrl: './contact-us.component.html',
})

// Clase del componente que se exporta por defecto.
export default class ContactUsComponent {
  // Inyecta el constructor de formularios.
  private formBuilder: FormBuilder = inject(FormBuilder);

  // Define un formulario para el envío de mensajes.
  public contactForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  // Método que se ejecuta al enviar el formulario.
  public onSubmit() {
    // Si el formulario no es válido, marca todos los campos como tocados y sale del método.
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    // Muestra un mensaje de éxito y reinicia el formulario.
    Swal.fire({
      icon: 'success',
      title: 'Message sent successfully!',
      showConfirmButton: false,
      timer: 1500,
    });
    // Reinicia el formulario.
    this.contactForm.reset();
  }

  // Método para obtener y validar un control del formulario.
  public fieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field); // Obtiene el control del formulario.
    if (!control) {
      // Si no existe, retorna verdadero.
      return true;
    }
    return control?.invalid && control.touched; // Retorna si el control es inválido y ha sido tocado.
  }
}
