import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private router: Router) {
  }

  public urlMain: string = '/';
  public urlProducts: string = '/products';

  public redirect(url: string) {
    this.router.navigate([url]);
  }

}
