import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './login.component.html',
})
export default class LoginComponent { }
