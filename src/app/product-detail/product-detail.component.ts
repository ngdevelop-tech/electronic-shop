import { ProductService } from './../service/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private productService: ProductService) {
  }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log('ID : ' + id );

    this.productService.getProduct(id).subscribe(
        product => this.product = product
    );
  }
  goBack() {
    this.location.back();
  }

}
