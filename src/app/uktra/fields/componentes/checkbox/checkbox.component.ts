import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FieldsService } from '../../services/fields.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

    constructor(public fb:FormBuilder ,
       private  fieldsService:FieldsService,
       public toastr: ToastrService,){}
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



}
