import { MockData } from './../mock-data/mock-product-data';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  products: Product[] = [];
  constructor() {
    this.products = MockData.Products;
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  getProduct(id: number) {
    return this.products.find( p => p.id === id);
  }

  removeProduct(product: Product) {
    let index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
