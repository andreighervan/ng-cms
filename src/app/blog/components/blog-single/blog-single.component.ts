import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {
  blog: Blog;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.blog = this.route.snapshot.data["blogPost"];
  }

}
