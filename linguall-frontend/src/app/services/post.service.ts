import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiPostsUrl = '/api/post'; 
  private postsData: Post[] = [];
  private postSub = new BehaviorSubject<Post[]>([])

  constructor(private http: HttpClient) { }

  get posts() {
    if (this.postsData.length === 0) {
        this.fetchAllPosts()
    }
    return this.postSub.asObservable()
    }

    fetchAllPosts() {
        return this.http.get<Post[]>(this.apiPostsUrl)
            .subscribe({
                next: data => {
                    console.log(data);
                    this.postsData = data;
                    this.postSub.next([...this.postsData]);
                },
            })
    }
}


