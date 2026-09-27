import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <h1>Hello {{ name }}</h1>
      <p>Angular güncellendi ve modern sürümde çalışıyor.</p>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 2rem;
      }

      h1 {
        color: #1976d2;
      }
    `,
  ],
})
export class AppComponent {
  name = 'Angular';
}
