import { Component, OnInit,Input } from '@angular/core';
import {product} from '../product';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService }  from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent {
  @Input() product:product; 

  constructor(
    private route: ActivatedRoute,
    private productservice: ProductService,
    private location: Location
  ) {}


  ngOnInit(): void {
    this.getProduct();
  }
  
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productservice.GetProduct(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }
  

}
