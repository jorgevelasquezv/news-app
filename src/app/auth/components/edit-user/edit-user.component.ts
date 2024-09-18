import {
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../domain/models/user.model';

@Component({
  selector: 'admin-edit-user', // Define el selector del componente.
  standalone: true, // Indica que el componente es independiente.
  imports: [CommonModule, FormsModule], // Importa los módulos necesarios.
  templateUrl: './edit-user.component.html', // Especifica la ubicación del archivo de plantilla HTML.
})
export class EditUserComponent {
  // Define una señal de entrada pública para el usuario.
  public user: InputSignal<User> = input.required<User>();

  // Define un emisor de salida pública para guardar el usuario.
  public saveUser: OutputEmitterRef<User> = output<User>();

  // Define un emisor de salida pública para cerrar el modal.
  public closeModal: OutputEmitterRef<void> = output<void>();

  // Método para guardar el usuario.
  save() {
    // Emite el usuario actual.
    this.saveUser.emit(this.user());
    // Llama al método para cerrar el modal.
    this.close();
  }

  // Método para cerrar el modal.
  close() {
    // Emite una señal para cerrar el modal.
    this.closeModal.emit();
  }
}
