import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenericService } from 'src/app/generic.service';

@Component({
  selector: 'app-posts-control',
  templateUrl: './posts-control.component.html',
  styleUrls: ['./posts-control.component.css']
})
export class PostsControlComponent implements OnInit {
  postId!: number;
  title: string = '';
  body: string = '';

  constructor(private route: ActivatedRoute, 
     private genericService: GenericService,
     private toastr: ToastrService
     ) {
    this.postId=this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    console.log(this.postId)
      if (this.postId) {
        this.genericService.get(`posts/${this.postId}`).subscribe((response: any) => {
          console.log(response)
          this.title = response.title;
          this.body = response.body;
        });
      } else {
        this.clearForm();
      }

  }

  onSubmit() {
    const postData = {
      title: this.title,
      body: this.body
    };

    if (this.postId) {
      this.genericService.put(`posts/${this.postId}`, postData).subscribe((response) => {
        console.log('Post updated:', response);
        this.toastr.success('Post Updated Successfully!', 'Success');
        this.clearForm();
      });
    } else {
      this.genericService.post('posts', postData).subscribe((response) => {
        console.log('New post added:', response);
        this.toastr.success('Post Added Successfully!', 'Success');
        this.clearForm()

      });
    }
  }

  clearForm() {
    this.title = '';
    this.body = '';
  }

}
