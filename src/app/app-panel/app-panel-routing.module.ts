import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsControlComponent } from './posts/posts-control/posts-control.component';
import { PostsAllComponent } from './posts/posts-all/posts-all.component';
import { CommentsControlComponent } from './comments/comments-control/comments-control.component';
import { CommentsAllComponent } from './comments/comments-all/comments-all.component';

const routes: Routes = [
  {
  path: '',
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'posts' },
    {
      path: 'posts',
      children: [
        { path: 'control', component: PostsControlComponent},
        { path: 'control/:id', component: PostsControlComponent},
        { path: 'all', component: PostsAllComponent }
      ]
    },
    {
      path: 'comments',
      children: [
        { path: 'control', component: CommentsControlComponent },
        { path: 'control/:id', component: CommentsControlComponent },
        { path: 'all', component: CommentsAllComponent }
      ]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPanelRoutingModule { }
