import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({ template: '' })
export abstract class BaseComponent {
  protected router = inject(Router);
  isLoading = false;

  goBack() {
    this.router.navigate(['/']);
  }
}