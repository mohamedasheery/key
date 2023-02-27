import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';

import { FilterComponent } from './components/filter/filter.component';
import { ListComponent } from './components/list/list.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompanyComponent,
  
    FilterComponent,
    ListComponent,
    AddNewComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
