import { FieldsService } from './../../services/fields.service';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent {
  constructor(public fb:FormBuilder ,
    private fieldsService:FieldsService,
     private toastr: ToastrService,){}
     langField:any=localStorage.getItem('selectedLanguage');

  @Input() addAnotherOption: any;
  @Input() selectedField: any;
  @Input() setFieldType: any;
  @Input() fieldTypeArray: any;
  @Input() deleteOption: any;
  @Input() createFieldForm: any;
  @Input() updateField: any;
  @Input() action: any;
  @Input() fields: any;
  @Input() setOptionsToUpdataField: any;
  @Input() field: any;
  @Input() switchLangField: any;
}
