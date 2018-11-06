import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { Blog } from '../blog';
import { ProductService } from '../product.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: product[] = [];
  blogs: Blog[] = [];

  constructor(private productservice: ProductService, private blogservice: BlogService) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogservice.getBlogs().subscribe(blog => this.blogs = blog);
  }
}