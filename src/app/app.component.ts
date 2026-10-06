import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav aria-label="Main navigation">
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
    </nav>
    <main>
      <router-outlet />
    </main>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
      padding: 2rem;
      font-family: Arial, sans-serif;
      color: #1f2937;
    }

    nav {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    a {
      color: #2563eb;
      text-decoration: none;
    }
  `,
})
export class AppComponent {}
