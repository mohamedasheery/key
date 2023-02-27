import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KayRoutingModule } from './kay-routing.module';
import { KayComponent } from './kay.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    KayComponent
  ],
  imports: [
    CommonModule,
    KayRoutingModule
  ],

})
export class KayModule { }
