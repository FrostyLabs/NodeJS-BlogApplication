import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: any;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogList();
  }

  getBlogList() {
    this.blogService.getAllBlogs().then((res) => {
      this.blogs = res;
    }, (err) => {
      console.log(err);
    });
  }

}
