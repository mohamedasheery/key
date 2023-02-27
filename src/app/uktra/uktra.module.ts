import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UktraRoutingModule } from './uktra-routing.module';
import { UktraComponent } from './uktra.component';


@NgModule({
  declarations: [
    UktraComponent
  ],
  imports: [
    CommonModule,
    UktraRoutingModule
  ]
})
export class UktraModule { }
