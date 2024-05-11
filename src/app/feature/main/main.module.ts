import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {MainComponent} from "./main.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModalModule,
    MainRoutingModule
  ],
  exports: [
    MainRoutingModule
  ]
})
export class MainModule { }
