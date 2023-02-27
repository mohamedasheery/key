import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent {
  constructor(public fb:FormBuilder , public toastr: ToastrService,){}
  @Input() addAnotherOption: any;
  @Input() selectedField: any;
  @Input() setFieldType: any;
  @Input() fieldTypeArray: any;
  @Input() deleteOption: any;
  @Input() createFieldForm: any;
}
