import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>About this application</h1>
    <p>Angular 22 standalone application example.</p>
    <a routerLink="/">Back to home</a>
  `,
})
export class AboutComponent {}
