import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  posts_content = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      date: '2024-02-22'
    },
    {
      text: 'Another blog post content goes here.',
      date: '2024-02-23'
    },
  ];

  currentPostIndex = 0;

  nextPost() {
    if (this.currentPostIndex < this.posts_content.length - 1) {
      this.currentPostIndex++;
    }
  }

  prevPost() {
    if (this.currentPostIndex > 0) {
      this.currentPostIndex--;
    }
  }

}
