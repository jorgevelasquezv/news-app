import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../domain/models/user.model';
import { Role } from '../../domain/enums/role.enum';
import { UserService } from '../../services/user.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL: string = environment.apiUrl;
  private http: HttpClient = inject(HttpClient);
  private userService: UserService = inject(UserService);

  constructor() {}

  login(email: string, password: string): Observable<User> {
    return this.http
      .get<[User]>(`${this.URL}/users`, { params: { email, password } })
      .pipe(map((users) => users[0]))
      .pipe(
        map((user) => {
          if (!user) throw new Error('Credenciales invalidas');
          if (!user.isActive) throw new Error('Usuario inactivo');
          if (user.password !== password) throw new Error('Credenciales invalidas');
          this.userService.setUser(user);
          return user;
        })
      );
  }

  createUser(user: User): Observable<User> {
    user.id = uuidv4();
    user.isActive = true;
    if (!user.role) user.role = Role.User;
    return this.http.post<User>('/user', user);
  }

  register(user: User): Observable<User> {
    user.role = Role.User;
    return this.createUser(user);
  }
}
