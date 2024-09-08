import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableUsersComponent } from '../../components/table-users/table-users.component';
import { CreateUserComponent } from "../../components/create-user/create-user.component";

@Component({
  selector: 'admin',
  standalone: true,
  imports: [
    CommonModule,
    TableUsersComponent,
    CreateUserComponent
],
  templateUrl: './admin.component.html',
})
export default class AdminComponent { }
