import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpawnSyncOptionsWithBufferEncoding } from 'child_process';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StorageService } from 'src/app/core/services/storage.service';
import { Blog } from '../../models/blog';

import { BlogService } from '../../services/blog.service';

const MEDIA_STORAGE_PATH = `blog/`;

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.scss']
})
export class AddBlogPostComponent implements OnInit {
  blogForm: FormGroup;
  blog: Blog;

  filePath: any;
  urlImage: string;
  downloadableURL=new BehaviorSubject<string>('');

  uploadPercent$: Observable<number>;

  constructor(private fb: FormBuilder,
    private blogService: BlogService,
    private storageService: StorageService,
    private storage: AngularFireStorage) { }

  ngOnInit() {
    this.buildBlogForm();
    this.downloadableURL.subscribe(url => this.urlImage = url);
  }

  buildBlogForm() {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      blogContent: ['', Validators.required]
    })
  }

  async uploadFile(event) {

    const file: File = event.target.files[0];

    if (file) {
      this.filePath = `blog/${new Date().getTime()}/${file.name}`;
      const task = this.storage.upload(this.filePath, file);

      (await task).ref.getDownloadURL().then(url => { this.downloadableURL.next(url); });

    } else {
      alert('No images selected');
      this.downloadableURL.next('');
    }

  }


  onSubmit(value) {
    console.log(this.filePath);
    debugger;
    this.blogService.createBlogPost(value, this.urlImage)
      .then(
        res => {
          alert('Blog Post Added Successfuly');
          this.blogForm.reset();
        }
      )

  }

}
