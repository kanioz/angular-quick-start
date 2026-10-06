import { Component } from '@angular/core';
import { BaseComponent } from './base.component';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'user',
  templateUrl: 'user.component.html',
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
export class UserComponent extends BaseComponent {
  name!: string;
  email!: string;
  address!: Address;
  hobbies!: string[];
  showHobbies!: boolean;
  posts!: Post[];

  constructor(private postService: PostService) {
    super();

    this.name = 'john doe';
    this.email = 'john@gmail.com';
    this.address = {
      street: 'next street',
      city: 'my city',
      state: 'texas',
    };
    this.hobbies = ['Movies', 'Sports', 'Travel'];
    this.showHobbies = false;

    this.postService.getPosts().subscribe({
      next: (res) => {
        this.posts = res as Post[];
        console.log(this.posts);
      },
      error: (err) => {
        console.error('Post fetch error', err);
      },
    });
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: string) {
    if (hobby && hobby.trim()) {
      this.hobbies.push(hobby);
    }
  }

  deleteHobby(index: number) {
    this.hobbies.splice(index, 1);
  }
}

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
