import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  constructor(private http: Http) { }

  getAllBlogs() {
    return new Promise((resolve, reject) => {
      this.http.get('/blog')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showBlog(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/blog/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveBlog(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/blog', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateBlog(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/blog/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteBlog(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/blog/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
