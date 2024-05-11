import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

declare const bootstrap: any;

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  public myObservable$: Observable<any> = new Observable((observer) => {
    let count = 0;
    setInterval(() => {
      observer.next(count++);
    }, 1000);
    setTimeout(() => {
      const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
      modal.show();
      observer.next('hello');
    }, 5000);
  });
}
