import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  blogs: any;
  blog = {};
  name ='Anonymous';

  constructor( private blogService: BlogService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getBlogList();
    this.getBlogDetail(this.route.snapshot.params['id']);
  }

  getBlogList() {
    this.blogService.getAllBlogs().then((res) => {
      this.blogs = res;
    }, (err) => {
      console.log(err);
    });
  }

  getBlogDetail(id) {
    this.blogService.showBlog(id).then((res) => {
      this.blog = res;
      console.log(this.blog);
    }, (err) => {
      console.log(err);
    });
  }

  deleteBlog(id) {
    this.blogService.deleteBlog(id).then((result) => {
      this.router.navigate(['/blogs']);
    }, (err) => {
      console.log(err);
    });
  }

}
