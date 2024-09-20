import { computed, Injectable, signal, WritableSignal } from '@angular/core';
// Importa los módulos necesarios de Angular:
// - computed: Para crear propiedades computadas.
// - Injectable: Marca la clase como un servicio inyectable.
// - signal y WritableSignal: Para manejar señales reactivas.

import { User } from '../domain/models/user.model';
// Importa la interfaz o modelo User que define la estructura de un usuario.

@Injectable({
  providedIn: 'root',
})
// Marca la clase como un servicio inyectable disponible en toda la aplicación.
export class UserService {
  // Declara una señal writable (escribible) que puede ser undefined o un objeto User.
  private _user: WritableSignal<User | undefined> = signal<User | undefined>(
    undefined
  );

  // Crea una propiedad computada que devuelve el valor actual de _user.
  public user = computed(() => this._user());

  public setUser(user: User | undefined): void {
    // Método para establecer el usuario actual.
    this._user.set(user); // Actualiza el valor de la señal _user.
  }
}
