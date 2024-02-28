import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl = '/api/post'; 
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
        return this.http.get<Post[]>(this.postUrl)
            .subscribe({
                next: data => {
                    this.postsData = data;
                    this.postSub.next([...this.postsData]);
                },
            })
    }

    addPost(content: string) {
        const post: Post = {
            content: content,
            date: new Date().toLocaleDateString('en-GB')
          };
          return this.http.post<Post>(this.postUrl, post);
    }

    deletePost(id: number) {
        return this.http.delete(`${this.postUrl}/${id}`)
    }

    editPost(id: number, newContent: string) {
        const update: { content: string } = { content: newContent };
        console.log(update)
        return this.http.put(`${this.postUrl}/${id}`, update);
      }

}
