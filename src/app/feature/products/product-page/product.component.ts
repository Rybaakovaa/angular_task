import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductType} from "../../../../types/product.type";
import {Subscription} from "rxjs";
import {ProductsService} from "../../../shared/service/products.service";
import {NavigateService} from "../../../shared/service/navigate.service";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private productService: ProductsService,
              private router:  Router,
              private activatedRoute: ActivatedRoute,
              private nav: NavigateService) {
  }

  public product: ProductType = {
    id: 0,
    image: '',
    title: '',
    price: 0,
    description: ''
  };

  private productSubscription: Subscription | null = null;

  private id: string | null = null;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (!this.id) {
      this.nav.redirect(this.nav.urlProducts);
      return;
    }

    this.productSubscription = this.productService.getProduct(this.id)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.product = data;
        },
        error: (error) => {
          console.log(error);
          this.nav.redirect(this.nav.urlProducts);
        }
      });
  }

  ngOnDestroy() {
    this.productSubscription?.unsubscribe();
  }
}
