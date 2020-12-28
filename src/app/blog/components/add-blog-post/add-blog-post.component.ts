import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.scss']
})
export class AddBlogPostComponent implements OnInit {
  blogForm: FormGroup;

  constructor(private fb: FormBuilder, private blogService: BlogService,
    private storage: AngularFireStorage) { }

  ngOnInit() {
    this.buildBlogForm();
  }

  buildBlogForm() {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      blogContent: ['', Validators.required]
    })
  }

  uploadFile(event) {

    const file: File = event.target.files[0];

    //const filePath = `blog/${this.blog.id}/${file.name}`;

    //const task = this.storage.upload(filePath, file);


  }

  onSubmit(blogForm) {
    debugger;
    this.blogService.createBlogPost(blogForm.value)
      .then(
        res => {
          debugger;
          alert('Succesfull blog post added')
          this.blogForm.reset();
        }
      )
  }

}
