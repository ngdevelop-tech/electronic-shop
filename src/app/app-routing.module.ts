import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductModelComponent } from './add-product-model/add-product-model.component';
import { AddProductTemplateComponent } from './add-product-template/add-product-template.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'add-product-template', component : AddProductTemplateComponent },
  {path: 'add-product-model', component: AddProductModelComponent}
];

@NgModule({
  imports : [ RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
