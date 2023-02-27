import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FilterComponent } from './components/filter-form/filter.component';
import { ListComponent } from './components/list-form/list.component';
import { AddComponent } from './components/add-form/add.component';
import { ViewComponent } from './components/view-form/view.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { ResponsesFormComponent } from './components/responses-form/responses-form.component';
import { FilterResponseComponent } from './components/filter-response/filter-response.component';
import { ListResponseComponent } from './components/list-response/list-response.component';
import { VersionFormComponent } from './components/version-form/version-form.component';
import { ViewVersionFormComponent } from './components/view-version-form/view-version-form.component';


@NgModule({
  declarations: [
    FormsComponent,
    FilterComponent,
    ListComponent,
    AddComponent,
    ViewComponent,
    EditFormComponent,
    ResponsesFormComponent,
    FilterResponseComponent,
    ListResponseComponent,
    VersionFormComponent,
    ViewVersionFormComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
