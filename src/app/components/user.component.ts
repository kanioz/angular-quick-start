import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../services/posts.service';

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styles: `
    :host {
      display: block;
      max-width: 48rem;
      margin: 0 auto;
      padding: 2rem;
      font-family: Arial, sans-serif;
    }

    h1 {
      color: #2563eb;
    }

    form {
      display: grid;
      gap: 0.75rem;
      margin-top: 1.5rem;
    }

    input {
      width: 100%;
      box-sizing: border-box;
      padding: 0.6rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    th,
    td {
      padding: 0.75rem;
      border: 1px solid #d1d5db;
      text-align: left;
    }
  `,
})
export class UserComponent {
  name = 'john doe';
  email = 'john@gmail.com';
  address: Address = {
    street: 'next street',
    city: 'my city',
    state: 'texas',
  };
  readonly hobbies = ['Movies', 'Sports', 'Travel'];
  showHobbies = false;
  newHobby = '';
  readonly posts = signal<Post[]>([]);

  private readonly postService = inject(PostService);

  constructor() {
    this.postService.getPosts().subscribe({
      next: (posts: Post[]) => {
        this.posts.set(posts);
      },
      error: (error: unknown) => {
        console.error('Post fetch error', error);
      },
    });
  }

  toggleHobbies(): void {
    this.showHobbies = !this.showHobbies;
  }

  addHobby(): void {
    const hobby = this.newHobby.trim();

    if (hobby) {
      this.hobbies.push(hobby);
      this.newHobby = '';
    }
  }

  deleteHobby(index: number): void {
    this.hobbies.splice(index, 1);
  }
}
