import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogSingleComponent implements OnInit {
  blog: Blog;
  color = 'blue-2';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.blog = this.route.snapshot.data["blogPost"];
  }

}
