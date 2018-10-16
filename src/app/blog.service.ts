import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import {Blog} from './blog';
import { map } from 'rxjs/operators';
import {Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:Http) { }  
  private apiUrl = "http://localhost/ProductAPI/api/blog";

  getBlogs():Observable<Blog[]>{
    //return this.http.get<Blog[]>(this.apiUrl);
    return this.http.get(this.apiUrl).pipe(map(response => <Blog[]>response.json()));
  }

  createBlogs(blog:Blog){
    return this.http.post(this.apiUrl,blog);
  }
}
