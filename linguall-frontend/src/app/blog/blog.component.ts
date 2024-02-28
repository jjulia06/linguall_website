import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

    currentPostIndex = 0;
    posts: Post[] = [];
    private postsSubscription!: Subscription;

    constructor(private postService: PostService) { }
  
    ngOnInit() {
      this.postService.fetchAllPosts()
      this.postsSubscription = this.postService.posts.subscribe(
        data => {
          this.posts = data.sort((a, b) => {
            return new Date(b.date as string).getTime() - new Date(a.date as string).getTime();
          });
        })
      }

    ngOnDestroy() {
      if (this.postsSubscription) {
        this.postsSubscription.unsubscribe();
      }
    }

  nextPost() {
    if (this.currentPostIndex < this.posts.length - 1) {
      this.currentPostIndex++;
    }
  }

  prevPost() {
    if (this.currentPostIndex > 0) {
      this.currentPostIndex--;
    }
  }

}
