import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { AddBlogPostComponent } from './components/add-blog-post/add-blog-post.component';

const routes: Routes = [
  {path: '', component: BlogComponent},
  { path: 'add-new-post', component:AddBlogPostComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
