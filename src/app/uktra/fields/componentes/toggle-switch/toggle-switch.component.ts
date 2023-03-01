import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FieldsService } from '../../services/fields.service';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent {
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
