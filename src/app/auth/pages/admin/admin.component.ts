import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TableUsersComponent } from '../../components/table-users/table-users.component';
import { CreateUserComponent } from '../../components/create-user/create-user.component';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'admin',
  standalone: true,
  imports: [CommonModule, TableUsersComponent, CreateUserComponent],
  templateUrl: './admin.component.html',
})
export default class AdminComponent implements OnInit, OnDestroy {
  private authService: AuthService = inject(AuthService);
  private usersSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.usersSubscription = this.authService.findUsers().subscribe();
  }
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
