import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'admin-create-user',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent { }
