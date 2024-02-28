import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {
  
  postContent: string = ''
  public allPosts: Post[] = []
  private postsSubscription!: Subscription
  public editingPostId: number | null = null;

  constructor(private postService: PostService,
              private router: Router) {}

  ngOnInit(): void {
    this.postService.fetchAllPosts()
    this.postsSubscription = this.postService.posts.subscribe(
      data => {
            this.allPosts = data
      })
  }

  ngOnDestroy() {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

  deletePost(post: Post) {
    console.log('Delete post:', post);
    this.postService.deletePost(post.id!).subscribe(() => {
      this.postService.fetchAllPosts()
    })
  }

  startEditing(post: Post) {
    this.postContent = post.content
    this.editingPostId = post.id!;
  }

  editPost(post: Post) {
    console.log('Edit post:', post);
    if (this.editingPostId !== null && this.postContent.trim() !== '') {
      const newContent = this.postContent;
      const postId = this.editingPostId;
      this.postService.editPost(postId, newContent).subscribe(() => {
        this.postService.fetchAllPosts();
        this.postContent = '';
        this.editingPostId = null;
      });
    }
  }

  cancelEditing() {
    this.editingPostId = null;
  }

  back(){
    this.router.navigate(['/admin/post']);
  }
}
