import { Injectable } from '@angular/core';
import { User } from '../domain/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | undefined;

  constructor() { }

  getUser(): User | undefined {
    return this.user;
  }

  setUser(user: User): void {
    this.user = user;
  }

}
