import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products:product[];
  // selectedproduct: product;

  // onSelect(Product: product): void {
  //   this.selectedproduct = Product;
  // }

  constructor(private productservice: ProductService) { }

   getProductsNew(): void {
    this.productservice.GetProductsNew().subscribe(products=>this.products=products);
  }

  ngOnInit() {
    this.getProductsNew();
  }

}

