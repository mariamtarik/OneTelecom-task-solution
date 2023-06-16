import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/generic.service';

@Component({
  selector: 'app-comments-all',
  templateUrl: './comments-all.component.html',
  styleUrls: ['./comments-all.component.css']
})
export class CommentsAllComponent implements OnInit {

  comments: any[] = [];

  constructor(private genericService: GenericService) { }

  ngOnInit() {
    this.allComments();
  }

  allComments() {
    this.genericService.get<any[]>('comments').subscribe(response => {
      console.log(response);
      this.comments = response.splice(0,50)
    });
  }

  deletePost(id: number) {
    this.genericService.delete<any>(`posts/${id}`).subscribe(() => {
      this.comments = this.comments.filter(comment => comment.id !== id);
    });
  }

}
