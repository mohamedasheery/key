import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldsRoutingModule } from './fields-routing.module';
import { FieldsComponent } from './fields.component';
import { AddFieldComponent } from './componentes/add-field/add-field.component';
import { FilterFieldComponent } from './componentes/filter-field/filter-field.component';
import { CategoryFieldComponent } from './componentes/category-field/category-field.component';
import { FieldTypeComponent } from './componentes/type-field/field-type.component';
import { ViewFieldComponent } from './componentes/view-field/view-field.component';
import { TestDragDropComponent } from './componentes/test-drag-drop/test-drag-drop.component';
import { DropdownComponent } from './componentes/dropdown/dropdown.component';
import { TextareaComponent } from './componentes/textarea/textarea.component';
import { ToggleSwitchComponent } from './componentes/toggle-switch/toggle-switch.component';
import { NumberComponent } from './componentes/number/number.component';
import { ImageComponent } from './componentes/image/image.component';
import { TextComponent } from './componentes/text/text.component';
import { CheckboxComponent } from './componentes/checkbox/checkbox.component';
import { RadiobuttonComponent } from './componentes/radiobutton/radiobutton.component';
import { FileUploadComponent } from './componentes/file-upload/file-upload.component';
import { RatingComponent } from './componentes/rating/rating.component';
import { ListFieldComponent } from './componentes/list-field/list-field.component';
import { TimePickerComponent } from './componentes/time-picker/time-picker.component';
import { LabelComponent } from './componentes/label/label.component';
// import {
// 	IgxDragDirective,
// 	IgxDropDirective,
// 	IgxDragDropModule,
// 	IgxDialogModule
//  } from "igniteui-angular";

@NgModule({
  declarations: [
    FieldsComponent,
    AddFieldComponent,
    FilterFieldComponent,
    CategoryFieldComponent,
    FieldTypeComponent,
    ViewFieldComponent,
    TestDragDropComponent,
    DropdownComponent,
    TextareaComponent,
    ToggleSwitchComponent,
    NumberComponent,
    ImageComponent,
    TextComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    FileUploadComponent,
    RatingComponent,
    ListFieldComponent,
    TimePickerComponent,
    LabelComponent
  ],
  imports: [
    CommonModule,
    FieldsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FieldsModule { }
