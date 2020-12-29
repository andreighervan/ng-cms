import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { AddBlogPostComponent } from './components/add-blog-post/add-blog-post.component';
import { EditBlogPostComponent } from './components/edit-blog-post/edit-blog-post.component';
import { BlogResolver } from './services/blog.resolver';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'add-new-post', component: AddBlogPostComponent },
  {
    path: ':blogUrl', component: EditBlogPostComponent,
    resolve: {
      lessons: BlogResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
