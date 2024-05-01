import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../service/products.service";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) { }


  public submitted: boolean = false;
  private subsctiption: Subscription | null = null;
  private subsctiptionOrder: Subscription | null = null;

  public orderForm = this.fb.group({
    inputProduct: [{ value: '', disabled: true }, [Validators.required]],
    inputName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    inputSurname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    inputPhone: ['', [Validators.required, Validators.pattern('^[0-9+]{11}$')]],
    inputCountry: ['', []],
    inputAddress: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9\s\/-]+$')]],
    inputZip: ['', []],
    inputComment: ['', []],
  })


  ngOnInit(): void {
    this.subsctiption = this.activatedRoute.queryParams.subscribe((params) => {
      const product = params['product'];
      if (product) this.orderForm.get('inputProduct')?.setValue(product);
    });
  }

  ngOnDestroy() {
    this.subsctiption?.unsubscribe();
    this.subsctiptionOrder?.unsubscribe();
  }


  get inputProduct() {return this.orderForm.get('inputProduct')};
  get inputName() {return this.orderForm.get('inputName')};
  get inputSurname() {return this.orderForm.get('inputSurname')};
  get inputPhone() {return this.orderForm.get('inputPhone')};
  get inputCountry() {return this.orderForm.get('inputCountry')};
  get inputAddress() {return this.orderForm.get('inputAddress')};
  get inputZip() {return this.orderForm.get('inputZip')};
  get inputComment() {return this.orderForm.get('inputComment')};



  sendOrder() {
    if (this.inputCountry?.value) this.inputCountry?.setValue(' ');
    if (this.inputZip?.value) this.inputZip?.setValue(' ');
    if (this.inputComment?.value) this.inputComment?.setValue(' ');
    if (this.orderForm.invalid) {
      this.submitted = true;
      // alert("Форма не заполнена");
      return;
    }

    const data = {
      name: this.inputName?.value as string,
      last_name: this.inputSurname?.value as string,
      phone: this.inputPhone?.value as string,
      country: this.inputCountry?.value as string,
      zip: this.inputZip?.value as string,
      product: this.inputProduct?.value as string,
      address: this.inputAddress?.value as string,
      comment: this.inputComment?.value as string,
    };
    console.log(data)

    this.subsctiptionOrder = this.productService.createOrder(data)
      .subscribe(response => {
        if (response.success && !response.message) {
          alert('Спасибо за заказ!');
          this.clearFields();
        } else {
          alert('Ошибка!');
        }
      })
  }

  clearFields() {
    this.submitted = false;

    for (const controlName in this.orderForm.controls) {
      // console.log(this.orderForm.get(controlName)?.value)
      this.orderForm.get(controlName)?.setValue('');
    }
  }

}
