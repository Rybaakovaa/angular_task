import {Injectable, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {PopupComponent} from "../components/popup/popup.component";

// declare const bootstrap: any;

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  private count: number = 0;
  public myObservable$: Observable<any> = new Observable((observer) => {
    setInterval(() => {
      observer.next(this.count++);
      if (this.count === 5) {
        this.popupComponent.open();
      }
    }, 1000);

    // setTimeout(() => {
    //   // const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    //   const modal = this.popupComponent.open();
    //   // modal.show();
    //   observer.next('hello');
    // }, 5000);
  });
}
