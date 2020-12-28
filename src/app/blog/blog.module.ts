import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { AddBlogPostComponent } from './components/add-blog-post/add-blog-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BlogItemComponent } from './components/blog-item/blog-item.component';

@NgModule({
  declarations: [BlogComponent, AddBlogPostComponent, BlogItemComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ]
})
export class BlogModule { }
