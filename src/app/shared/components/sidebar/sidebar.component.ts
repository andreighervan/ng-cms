import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/blog/models/blog';
import { BlogService } from 'src/app/blog/services/blog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  blogPosts: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.loadBlogPosts();
  }

  loadBlogPosts() {

    this.blogService.loadAllPosts()
      .pipe(
      ).subscribe(posts => this.blogPosts = posts);
  }

}
