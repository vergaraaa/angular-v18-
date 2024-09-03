import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-loader',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Hello world</h1>`,
})
export class UsersLoaderComponent {
  constructor() {}
}
