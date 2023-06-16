import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { AppPanelRoutingModule } from './app-panel-routing.module';
import { PostsControlComponent } from './posts/posts-control/posts-control.component';
import { PostsAllComponent } from './posts/posts-all/posts-all.component';
import { CommentsControlComponent } from './comments/comments-control/comments-control.component';
import { CommentsAllComponent } from './comments/comments-all/comments-all.component';
import { SharedComponent } from './shared/shared.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostsControlComponent,
    PostsAllComponent,
    CommentsControlComponent,
    CommentsAllComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    AppPanelRoutingModule,
    FormsModule,
    ToastrModule.forRoot()
  ]
})
export class AppPanelModule { }
