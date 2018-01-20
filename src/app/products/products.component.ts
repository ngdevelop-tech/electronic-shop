import { LoaderService } from './../service/loader.service';
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

  constructor(public productService: ProductService,
    private loaderService: LoaderService) {

  }

  ngOnInit() {
    this.loaderService.showLoader();
    this.productService.getProducts()
      .subscribe(
      products => {
        this.products = products;
        this.loaderService.hideLoader();
      }
      );
  }

  deleteProduct(product: Product) {
    this.loaderService.showLoader();
    this.productService.removeProduct(product).subscribe();
    this.productService.getProducts()
      .subscribe(
      products => {
      this.products = products;
        this.loaderService.hideLoader();
      }
      );
  }

}
