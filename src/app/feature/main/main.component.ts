import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import {PopupService} from "../../shared/service/popup.service";
import {PopupComponent} from "../../shared/components/popup/popup.component";

declare var $: any;

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{

  public showPopup: boolean = true;
  private subscription: Subject<boolean> = this.popupService.myObservable;


  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  constructor(private popupService: PopupService) {
  }

  ngOnInit() {
    this.popupService.startTimer();
    this.subscription.subscribe(data => {
      console.log(data);
      this.popupComponent.open();
    });

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

    // this.subscription = this.popupService.myObservable$.subscribe((data) => {
    //   console.log(data); // Обработка данных от Observable
    // });
  }

  ngOnDestroy() {
    // this.subscription?.unsubscribe();
  }
}
