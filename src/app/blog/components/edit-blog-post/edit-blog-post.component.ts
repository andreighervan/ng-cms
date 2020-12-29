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
    this.blog = this.route.snapshot.data["blogUrl"];
    this.buildBlogForm();
    this.setFormValues();
  }

  setFormValues() {
    this.blogForm.patchValue({
      title: this.blog.title,
      blogContent:this.blog.blogContent
    })
  }

  buildBlogForm() {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      blogContent: ['', Validators.required]
    })
  }

  onSubmit(value) {
   
  }


}
