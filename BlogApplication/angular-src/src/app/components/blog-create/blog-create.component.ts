import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  blog = {};

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
  }

  saveBlog() {
    this.blogService.saveBlog(this.blog).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/blogs']);
      // this.router.navigate(['/blog-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
