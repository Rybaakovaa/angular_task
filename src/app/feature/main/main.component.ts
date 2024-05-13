import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {PopupService} from "../../shared/service/popup.service";

declare var $: any;

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{

  public showPopup: boolean = true;
  private subscription: Subscription | undefined;

  constructor(private popupService: PopupService) {
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

    // this.subscription = this.createPopupObservable().subscribe((param: string) => {
    //   console.log(param);
    // })

    this.subscription = this.popupService.myObservable$.subscribe((data) => {
      console.log(data); // Обработка данных от Observable
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
