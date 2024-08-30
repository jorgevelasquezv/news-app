import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Footer.component.html',
})
export class FooterComponent { }
