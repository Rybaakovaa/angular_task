import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./shared/components/layout/layout.component";

const routes: Routes = [
  // создаем линивую загрузку модулей
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./feature/main/main.module').then(m => m.MainModule)},
      {path: 'order', loadChildren: () => import('./feature/order/order.module').then(m => m.OrderModule)},
      {path: 'products', loadChildren: () => import('./feature/products/products.module').then(m => m.ProductsModule)},
    ]
  },
  // { path: 'product-page/:id', component: ProductComponent},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
