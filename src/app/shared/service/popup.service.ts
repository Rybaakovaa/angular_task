import {Injectable, ViewChild} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {PopupComponent} from "../components/popup/popup.component";

// declare const bootstrap: any;

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  private isShowed: boolean = false;
  public myObservable: Subject<boolean> = new Subject<boolean>();

  startTimer() {
    if (!this.isShowed) {
      setTimeout(() => {
        this.myObservable.next(true);
      }, 3000);
      // alert(1);
      this.isShowed = true;
    }
  }

  // private count: number = 0;
  // public myObservable$: Observable<any> = new Observable((observer) => {
  //   setInterval(() => {
  //     observer.next(this.count++);
  //     if (this.count === 5) {
  //       this.popupComponent.open();
  //     }
  //   }, 1000);
  //
  //   // setTimeout(() => {
  //   //   // const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  //   //   const modal = this.popupComponent.open();
  //   //   // modal.show();
  //   //   observer.next('hello');
  //   // }, 5000);
  // });
}
