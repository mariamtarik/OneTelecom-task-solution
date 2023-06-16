import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenericService } from 'src/app/generic.service';

@Component({
  selector: 'app-comments-control',
  templateUrl: './comments-control.component.html',
  styleUrls: ['./comments-control.component.css']
})
export class CommentsControlComponent implements OnInit {
  commentId!: number;
  name: string = '';
  email: string = '';
  body: string = '';


  constructor(private route: ActivatedRoute, 
     private genericService: GenericService,
     private toastr: ToastrService
     ) {
    this.commentId=this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    console.log(this.commentId)
      if (this.commentId) {
        this.genericService.get(`comments/${this.commentId}`).subscribe((response: any) => {
          console.log(response)
          this.name = response.name;
          this.email = response.email;
          this.body = response.body;
        });
      } else {
        this.clearForm();
      }

  }

  onSubmit() {
    const commentData = {
      name: this.name,
      email: this.email,
      body: this.body
    };

    if (this.commentId) {
      this.genericService.put(`comments/${this.commentId}`, commentData).subscribe((response) => {
        console.log('comments updated:', response);
        this.toastr.success('comments Updated Successfully!', 'Success');
        this.clearForm();
      });
    } else {
      this.genericService.post('comments', commentData).subscribe((response) => {
        console.log('New post added:', response);
        this.toastr.success('comment added Successfully!', 'Success');
        this.clearForm()

      });
    }
  }

  clearForm() {
    this.name = '';
    this.email = '';
    this.body = '';
  } 

}
