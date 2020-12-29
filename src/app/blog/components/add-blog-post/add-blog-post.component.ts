import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.scss']
})
export class AddBlogPostComponent implements OnInit {
  blogForm: FormGroup;

  constructor(private fb: FormBuilder,
    private blogService: BlogService) { }

  ngOnInit() {
    this.buildBlogForm();
  }

  buildBlogForm() {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      blogContent: ['', Validators.required]
    })
  }

  onSubmit(value) {
    this.blogService.createBlogPost(value)
      .then(
        res => {
          alert('Blog Post Added Successfuly');
          this.blogForm.reset();
        }
      )
  }

}
