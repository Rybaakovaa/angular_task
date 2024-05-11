import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from "./components/layout/header/header.component";
import {TextCutPipe} from "./pipes/text-cut.pipe";
import {LayoutComponent} from "./components/layout/layout.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    TextCutPipe,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    TextCutPipe,
    LayoutComponent
  ]
})
export class SharedModule { }
