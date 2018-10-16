import { Component, OnInit,ViewChild } from '@angular/core';
import { BlogService } from '../blog.service';
import {Blog} from '../blog'; 
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blog:Blog;
  title = 'Product Details';
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  @ViewChild("myckeditor") ckeditor: any;



  constructor(private blogservice:BlogService,private router : Router) { 
    this.mycontent = `<p>My html content</p>`;
  }

  ngOnInit() {
    
this.blog={Content:"",Id:0};
    this.ckeConfig = {
      allowedContent: true,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
  }

  onSubmit()
  {
    this.blog.Content=this.mycontent;
    this.blog.Id=0;
    console.log(this.mycontent);
    this.blogservice.createBlogs(this.blog)
    .subscribe( data => {
      this.router.navigate(['dashboard']);
    });
  }
}
