import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-product-model',
  templateUrl: './add-product-model.component.html',
  styleUrls: ['./add-product-model.component.css']
})
export class AddProductModelComponent implements OnInit {

  productTypes = ['Laptop', 'Mobile'];

  myForm: FormGroup;

  title: FormControl;
  modelName: FormControl;
  color: FormControl;
  productType: FormControl;
  brand: FormControl;
  price: FormControl;


  constructor() { }

  ngOnInit() {

    this.title = new FormControl();
    this.modelName = new FormControl();
    this.color = new FormControl();
    this.productType = new FormControl();
    this.brand = new FormControl();
    this.price = new FormControl();

    this.myForm = new FormGroup({
      'title': this.title,
      'modelName' : this.modelName,
      'productType' : this.productType,
      'color': this.color,
      'brand': this.brand,
      'price': this.price
    });

  }

}
