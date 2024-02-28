import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit{

  postContent: string = ''
  addButtonClicked: boolean = false;

  constructor(private postService: PostService,
              private router: Router) {}

  ngOnInit(): void {
    this.postContent = ''
  }

  addPost() {
    if (this.postContent.trim() !== '') {
      this.postService.addPost(this.postContent).subscribe(() => {
        this.postContent = '';
      });
      this.addButtonClicked = true;
      setTimeout(() => {
        this.addButtonClicked = false;
      }, 300);
    }
  }

  back(){
    this.router.navigate(['/admin/post']);
  }
}
