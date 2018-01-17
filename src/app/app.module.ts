import { ProductService } from './service/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AddProductModelComponent } from './add-product-model/add-product-model.component';
import { AddProductTemplateComponent } from './add-product-template/add-product-template.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    AddProductModelComponent,
    AddProductTemplateComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
