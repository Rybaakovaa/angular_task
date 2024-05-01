import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class Common {

  constructor(private router: Router) {
  }

  public urlMain: string = '/';
  public urlProducts: string = '/products';

  public redirect(url: string) {
    this.router.navigate([url]);
  }

}
