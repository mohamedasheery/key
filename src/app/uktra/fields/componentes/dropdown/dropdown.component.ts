import { FormBuilder } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  constructor(public fb:FormBuilder,  public toastr: ToastrService,){}
@Input() addAnotherOption: any;
@Input() selectedField: any;
@Input() setFieldType: any;
@Input() fieldTypeArray: any;
@Input() deleteOption: any;
@Input() createFieldForm: any;
}
