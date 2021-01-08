import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/blog/models/blog';
import { BlogService } from 'src/app/blog/services/blog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  blogPosts: Blog[];

  constructor(private blogService: BlogService,
    private router: Router) { }

  ngOnInit() {
    this.loadBlogPosts();
  }

  loadBlogPosts() {

    this.blogService.loadAllPosts()
      .pipe(
      ).subscribe(posts => this.blogPosts = posts);
  }

  goToSinglePost(post) {
    debugger;
    this.router.navigate(['/blog', post.title]);
  }

}
