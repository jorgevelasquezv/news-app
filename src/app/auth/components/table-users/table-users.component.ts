import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'admin-table-users',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './table-users.component.html',
})
export class TableUsersComponent { }
