import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  constructor(public fb:FormBuilder , public toastr: ToastrService,){}
  @Input() addAnotherOption: any;
  @Input() selectedField: any;
  @Input() setFieldType: any;
  @Input() fieldTypeArray: any;
  @Input() deleteOption: any;
  @Input() createFieldForm: any;
}
