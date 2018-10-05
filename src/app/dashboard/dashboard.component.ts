import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  products: product[] = []; 

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productservice.GetProductsNew()
      .subscribe(product => this.products = product.slice(1, 5));
  }
}