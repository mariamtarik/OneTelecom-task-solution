import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GenericService } from 'src/app/generic.service';

@Component({
  selector: 'app-posts-all',
  templateUrl: './posts-all.component.html',
  styleUrls: ['./posts-all.component.css']
})
export class PostsAllComponent implements OnInit {

  posts: any[] = [];

  constructor(private genericService: GenericService) { }

  ngOnInit() {
    this.allPosts();
  }

  allPosts() {
    this.genericService.get<any[]>('posts').subscribe(response => {
      console.log(response);
      this.posts = response;
    });
  }

  deletePost(postId: number) {
    this.genericService.delete<any>(`posts/${postId}`).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== postId);
    });
  }


}
