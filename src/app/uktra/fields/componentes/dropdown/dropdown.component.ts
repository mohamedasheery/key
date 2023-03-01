import { FormBuilder } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FieldsService } from '../../services/fields.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  constructor(public fb:FormBuilder ,  private  fieldsService:FieldsService, public toastr: ToastrService,){}
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
