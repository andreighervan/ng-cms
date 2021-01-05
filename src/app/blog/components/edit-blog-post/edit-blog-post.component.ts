import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-edit-blog-post',
  templateUrl: './edit-blog-post.component.html',
  styleUrls: ['./edit-blog-post.component.scss']
})
export class EditBlogPostComponent implements OnInit {

  blogForm: FormGroup;
  blog: Blog;

  constructor(private fb: FormBuilder,
    private blogService: BlogService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.blog = this.route.snapshot.data["blogPost"];
    this.buildBlogForm();
    this.setFormValues(this.blog);
  }

  setFormValues(blog) {
    this.blogForm.patchValue({
      title: blog.title,
      blogContent: blog.blogContent
    })
  }

  buildBlogForm() {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      blogContent: ['', Validators.required]
    })
  }

  onSubmit(value, blog) {
    this.blogService.updateBlogPost(blog.id, value).subscribe()
  }


}
