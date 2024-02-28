import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.scss']
})
export class AdminPostComponent {

  constructor(private router: Router) {}

  addPost(){
    this.router.navigate(['/admin/post/add-post']);
  }
  
  editPosts(){
    this.router.navigate(['/admin/post/edit-post']);
  }
}
