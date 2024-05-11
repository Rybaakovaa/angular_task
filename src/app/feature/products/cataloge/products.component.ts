import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ProductsService} from "../../../shared/service/products.service";
import {ProductType} from "../../../../types/product.type";
import {Router} from "@angular/router";
import {NavigateService} from "../../../shared/service/navigate.service";

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductsService,
              private router:  Router,
              private nav: NavigateService) {
  }

  public products: ProductType[] = [];
  private productsSubscription: Subscription | null = null;

  ngOnInit() {
    this.productsSubscription = this.productService.getProducts()
      .subscribe({
        next: (data) => {
          console.log(data);
          this.products = data;
        },
        error: (error) => {
          console.log(error);
          this.nav.redirect(this.nav.urlMain);
        }
      });
  }

  ngOnDestroy() {
    this.productsSubscription?.unsubscribe();
  }
}
