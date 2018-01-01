import { Product } from './../models/product';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() removed = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.removed.emit(this.product);
  }

}
