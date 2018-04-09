import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  blog = {};

  constructor(private route: ActivatedRoute, private router: Router, private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogDetail(this.route.snapshot.params['id']);
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
