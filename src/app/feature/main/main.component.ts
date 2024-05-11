import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
// import {Common} from "../../../common";

declare var $: any;
// declare const bootstrap: any;

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{

  public showPopup: boolean = true;
  private subscription: Subscription | undefined;

  constructor(
    // private common: Common
    private modalService:NgbModal
  ) {
  }

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;

  private createPopupObservable() : Observable<any> {
    return new Observable((observable) => {
      let count = 0;
      setInterval(() => {
        observable.next(count++);
      }, 1000);
      setTimeout(() => {
        // const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        const modal = this.modalService.open('popup');
        // modal.show();
        observable.next('hello');
      }, 5000);
    });
  }

  ngOnInit() {
    $( function() {
      $( "#accordion" ).accordion({
        heightStyle: "content",
        // Все секции будут скрыты при загрузке
        collapsible: true,
        active: false
      });
    });

    this.subscription = this.createPopupObservable().subscribe((param: string) => {
      console.log(param);
    })

    // this.subscription = this.common.myObservable$.subscribe((data) => {
    //   console.log(data); // Обработка данных от Observable
    // });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
