import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  posts_content = [
    {
      text: 'Hej! Przedstawiamy wam naszą stronę internetową na której będziemy zamieszczać nasze plany i informować was o przyszłych wydarzeniach. Wyczekujcie!',
      date: '2024-02-24'
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
