import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  blog = {};

  constructor(private blogService: BlogService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBlog(this.route.snapshot.params['id']);
  }

  getBlog(id) {
    this.blogService.showBlog(id).then((res) => {
      this.blog = res;
      console.log(this.blog);
    }, (err) => {
      console.log(err);
    });
  }

  updateBlog(id) {
    this.blogService.updateBlog(id, this.blog).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/blog-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
