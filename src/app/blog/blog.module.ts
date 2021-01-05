import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressBarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AddBlogPostComponent } from './components/add-blog-post/add-blog-post.component';
import { EditBlogPostComponent } from './components/edit-blog-post/edit-blog-post.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';

@NgModule({
  declarations: [BlogComponent, AddBlogPostComponent, EditBlogPostComponent, BlogSingleComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ]
})
export class BlogModule { }
