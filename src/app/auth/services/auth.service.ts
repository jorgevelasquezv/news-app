// Importaciones necesarias para el servicio de autenticación.
import { HttpClient } from '@angular/common/http'; // Permite realizar peticiones HTTP.
import {
  computed, // Permite definir propiedades computadas.
  inject, // Método para inyectar dependencias.
  Injectable, // Decorador que define un servicio inyectable.
  OnDestroy, // Interfaz para manejar la destrucción del componente.
  Signal, // Tipo para señalizar cambios reactivos.
  signal, // Función para crear señales.
  WritableSignal, // Tipo de señal que puede ser escrita.
} from '@angular/core'; // Importaciones de núcleo de Angular.
import { catchError, map, Observable, of, Subscription, switchMap } from 'rxjs'; // Importaciones de RxJS para programación reactiva.
import { v4 as uuidv4 } from 'uuid'; // Importa función para generar UUIDs.
import { User } from '../../domain/models/user.model'; // Modelo de usuario.
import { Role } from '../../domain/enums/role.enum'; // Enumeración de roles de usuario.
import { UserService } from '../../services/user.service'; // Servicio para gestionar usuarios.
import { environment } from '../../../environments/environment'; // Importa la configuración del entorno.
import { AuthStatus } from '../../domain/enums/auth-status.enum'; // Enumeración del estado de autenticación.

@Injectable({
  providedIn: 'root', // El servicio estará disponible en toda la aplicación.
})
export class AuthService implements OnDestroy {
  // Define el servicio de autenticación e implementa OnDestroy.
  private URL: string = environment.apiUrl; // URL base de la API, obtenida del entorno.
  private http: HttpClient = inject(HttpClient); // Inyección del cliente HTTP para realizar peticiones.
  private userService: UserService = inject(UserService); // Inyección del servicio de usuario.
  private verifiUserLocalStorageSubscription: Subscription = new Subscription(); // Suscripción para verificar usuario en localStorage.
  private _authStatus: WritableSignal<AuthStatus> = signal<AuthStatus>( // Señal que representa el estado de autenticación.
    AuthStatus.checking // Estado inicial de verificación.
  );
  public authStatus: Signal<AuthStatus> = computed(() => this._authStatus()); // Propiedad computada que retorna el estado de autenticación.
  private _users: WritableSignal<User[] | undefined> = signal<
    User[] | undefined
  >(undefined); // Señal para almacenar usuarios.
  public users: Signal<User[]> = computed(() => this._users() ?? []); // Propiedad computada que retorna la lista de usuarios.

  constructor() {
    this.verifiUserLocalStorageSubscription = // Se suscribe a la verificación del estado de autenticación.
      this.checkAuthStatus().subscribe();
  }

  ngOnDestroy(): void {
    this.verifiUserLocalStorageSubscription.unsubscribe(); // Cancela la suscripción al destruir el servicio.
  }

  private checkAuthStatus() {
    // Método privado para verificar el estado de autenticación.
    const userId = localStorage.getItem('userId'); // Obtiene el ID de usuario del localStorage.
    if (!userId) {
      // Si no hay ID de usuario.
      this.logout(); // Cierra sesión.
      return of(null); // Retorna un observable nulo.
    }
    return this.findUserById(userId).pipe(
      // Busca al usuario por ID.
      map((user) => {
        this.setAuthentication(user); // Establece el estado de autenticación.
        return user; // Retorna el usuario encontrado.
      }),
      catchError(() => {
        // Maneja errores en la búsqueda.
        this.logout(); // Cierra sesión en caso de error.
        return of(null); // Retorna un observable nulo.
      })
    );
  }

  public login(email: string, password: string): Observable<User> {
    // Método público para iniciar sesión.
    return this.http // Realiza una petición HTTP GET para buscar usuarios.
      .get<[User]>(`${this.URL}/users`, { params: { email, password } }) // Obtiene usuarios filtrados por email y contraseña.
      .pipe(map((users) => users[0])) // Toma el primer usuario de la respuesta.
      .pipe(
        map((user) => {
          // Mapea el usuario para realizar validaciones.
          if (!user) throw new Error('Invalid Credentials'); // Lanza error si no hay usuario.
          if (!user.isActive) throw new Error('User Inactive'); // Lanza error si el usuario está inactivo.
          if (user.password !== password)
            // Verifica si la contraseña es correcta.
            throw new Error('Invalid Credentials'); // Lanza error si la contraseña no es correcta.
          this.setAuthentication(user); // Establece la autenticación si es válido.
          return user; // Retorna el usuario autenticado.
        })
      );
  }

  private setAuthentication(user: User): boolean {
    // Método privado para establecer la autenticación.
    this.userService.setUser(user); // Establece el usuario en el servicio de usuario.
    this._authStatus.set(AuthStatus.authenticated); // Cambia el estado de autenticación a autenticado.
    if (user.id) localStorage.setItem('userId', user.id); // Guarda el ID de usuario en localStorage.
    return true; // Retorna verdadero.
  }

  public createUser(user: User): Observable<User> {
    // Método público para crear un nuevo usuario.
    user.id = uuidv4(); // Genera un ID único para el usuario.
    user.isActive = true; // Establece el usuario como activo.
    if (!user.role) user.role = Role.User; // Asigna el rol de usuario si no se proporciona.
    return this.http.post<User>(`${this.URL}/users`, user); // Realiza una petición HTTP POST para crear el usuario.
  }

  public register(user: User): Observable<User> {
    // Método público para registrar un nuevo usuario.
    user.role = Role.User; // Asigna el rol de usuario.
    return this.findUserByEmail(user.email) // Busca usuarios por email.
      .pipe(
        map((users) => {
          if (users.length) throw new Error('El email ya esta registrado'); // Lanza error si el email ya está registrado.
          return user; // Retorna el usuario si no está registrado.
        })
      )
      .pipe(
        switchMap(() => {
          // Cambia al siguiente observable.
          this.setAuthentication(user); // Establece la autenticación.
          return this.createUser(user); // Crea el usuario.
        })
      );
  }

  private findUserByEmail(email: string): Observable<[User]> {
    // Método privado para buscar usuarios por email.
    return this.http.get<[User]>(`${this.URL}/users`, { params: { email } }); // Realiza una petición HTTP GET para buscar por email.
  }

  public findUsers(): Observable<User[]> {
    // Método público para obtener todos los usuarios.
    return this.http.get<User[]>(`${this.URL}/users`).pipe(
      // Realiza una petición HTTP GET para obtener usuarios.
      map((users) => {
        this._users.set(users); // Establece los usuarios en la señal.
        return users; // Retorna la lista de usuarios.
      })
    );
  }

  public setUsers(users: User[]) {
    // Método público para establecer usuarios.
    this._users.set(users); // Actualiza la señal de usuarios.
  }

  public findUserById(id: string): Observable<User> {
    // Método público para buscar un usuario por ID.
    return this.http // Realiza una petición HTTP GET para buscar por ID.
      .get<[User]>(`${this.URL}/users/`, { params: { id } })
      .pipe(map((users) => users[0])) // Toma el primer usuario de la respuesta.
      .pipe(
        map((user) => {
          if (!user) throw new Error('Usuario no encontrado'); // Lanza error si no se encuentra el usuario.
          return user; // Retorna el usuario encontrado.
        })
      );
  }

  public updtaeUser(user: User): Observable<User> {
    // Método público para actualizar un usuario.
    if (!user.id) throw new Error('Usuario no encontrado'); // Lanza error si no se proporciona ID.
    return this.http.put<User>(`${this.URL}/users/${user.id}`, user); // Realiza una petición HTTP PUT para actualizar el usuario.
  }

  public deleteUser(user: User): Observable<User> {
    // Método público para eliminar un usuario.
    if (!user.id) throw new Error('Usuario no encontrado'); // Lanza error si no se proporciona ID.
    return this.http.delete<User>(`${this.URL}/users/${user.id}`); // Realiza una petición HTTP DELETE para eliminar el usuario.
  }

  public logout(): void {
    // Método público para cerrar sesión.
    localStorage.removeItem('userId'); // Elimina el ID de usuario del localStorage.
    this.userService.setUser(undefined); // Establece el usuario en el servicio de usuario como indefinido.
    this._authStatus.set(AuthStatus.unauthenticated); // Cambia el estado de autenticación a no autenticado.
  }
}
