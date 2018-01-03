import { ProductService } from './../service/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product-template',
  templateUrl: './add-product-template.component.html',
  styleUrls: ['./add-product-template.component.css']
})
export class AddProductTemplateComponent implements OnInit {

  product: Product = new Product();
  formSubmitted = false;
  productTypes = ['Laptop', 'Mobile' ];
  constructor(public productService: ProductService) { }

  ngOnInit() {
  }

  addProduct() {
    this.productService.addProduct(this.product);
    this.formSubmitted = true;
  }

}
