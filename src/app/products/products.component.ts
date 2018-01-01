import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(public productService: ProductService) {
    this.products = productService.getProducts();
  }

  ngOnInit() {
  }

  deleteProduct(product: Product) {
    this.productService.removeProduct(product);

    this.products = this.productService.getProducts();
  }

}
