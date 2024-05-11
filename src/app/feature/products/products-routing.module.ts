import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./cataloge-page/products.component";
import {ProductComponent} from "./product-page/product.component";

const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: ':id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
